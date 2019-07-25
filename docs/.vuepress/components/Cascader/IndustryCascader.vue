<template>
    <el-cascader
        ref="industryCascader"
        v-model="selIndustry"
        :disabled="disable"
        :size="size"
        :style="{width: width}"
        :options="industryList"
        :props="industryProps"
        placeholder="选择行业"
        :clearable="!disable"
        @active-item-change="handleIndustryChange"
        @change="industryChange" />
</template>

<script>
import { industry, thirdIndustry } from "@/api/components/casCader";
export default {
    props: {
        width: {
            type: String,
            default: '100%'
        },
        isThird: {
            type: Boolean,
            default: false
        },
        disable: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'small'
        },
        isShowAllTxt: {
            type: Boolean,
            default: false
        },
        value: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            industryList: [],
            industryProps: {
                value: 'industryId',
                label: "name"
            },
            selIndustry: []
        };
    },
    methods: {
        resetIndustry() {
            this.selIndustry = [];
        },
        returnIndustry(selIndustry) {
            if(selIndustry) {
                this.selIndustry = selIndustry;
                this.returnData(selIndustry);
            }
        },
        returnData(val) {
            industry({ pid: 0 }).then(res => {
                for(const i in res.data) {
                    res.data[i].children = [];
                }
                this.industryList = res.data;
                if(this.isShowAllTxt) {
                    this.industryList.unshift({
                        industryId: null,
                        name: "全部"
                    });
                }
                industry({ pid: val[0] }).then(ress => {
                    this.industryList[val[0] - 1].children = ress.data;
                    var nameArr = this.$refs.industryCascader.currentLabels;
                    this.$emit('input', val[1]);
                    this.$emit('industryObj', nameArr, val);
                });
            });
        },
        // 获取行业
        getIndustry(pid, level, val) {
            if(this.isThird) {
                thirdIndustry({ pId: pid }).then(res => {
                    var data = res.data;
                    if(level == 1) {
                        for(const i in data) {
                            data[i].children = [];
                            data[i].industryId = data[i].tindustryId;
                        }
                        this.industryList = data;
                        if(this.isShowAllTxt) {
                            this.industryList.unshift({
                                industryId: null,
                                name: "全部"
                            });
                        }
                        this.selIndustry = [null];
                    }else {
                        for(const i in data) {
                            data[i].industryId = data[i].tindustryId;
                        }
                        if(this.isShowAllTxt) {
                            this.industryList[val[0]].children = data;
                        }else {
                            this.industryList[val[0] - 1].children = data;
                        }
                    }
                });
            }else {
                industry({ pid: pid }).then(res => {
                    var data = res.data;
                    if(level == 1) {
                        for(const i in data) {
                            data[i].children = [];
                        }
                        this.industryList = data;
                        if(this.isShowAllTxt) {
                            this.industryList.unshift({
                                industryId: null,
                                name: "全部"
                            });
                        }
                        this.selIndustry = [null];
                    }else {
                        if(this.isShowAllTxt) {
                            this.industryList[val[0]].children = data;
                        }else {
                            this.industryList[val[0] - 1].children = data;
                        }
                    }
                });
            }
        },
        // 行业选择变化
        handleIndustryChange(val) {
            var length = val.length;
            if(length == 1) {
                this.getIndustry(val[0], 2, val);
            }
        },

        industryChange(idArr) {
            var nameArr = this.$refs.industryCascader.currentLabels;
            this.$emit('input', idArr[1]);
            this.$emit('industryObj', nameArr, idArr);
        }

    },
    mounted() {
        this.getIndustry(0, 1);
    },
    watch: {
        value(val) {
            if(val == null || val == []) {
                if(this.isShowAllTxt) {
                    this.selIndustry = [null];
                }else {
                    this.selIndustry = [];
                }
                this.$emit('industryObj', null, null);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
    /deep/ .el-input{
        width: 100% !important;
    }
</style>
