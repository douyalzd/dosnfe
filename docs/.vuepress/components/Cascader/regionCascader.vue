<template>
    <div>
        <el-cascader
            ref="regionCascader"
            v-model="selRegion"
            :clearable="clearable"
            :style="{width:width}"
            :size="size"
            :change-on-select="changeOnSelect"
            :options="provinceList"
            :props="cityProps"
            @active-item-change="handlePrivinceChange"
            @change="provinceChange" />
    </div>
</template>

<script>
import { getProvince, getCity, getDistinct } from "@/api/commApi/xdApi.js";
export default {
    props: {
        value: {
            type: Array,
            default: () => []
        },
        width: {
            type: String,
            default: '100%'
        },
        size: {
            type: String,
            default: 'small'
        },
        changeOnSelect: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: true
        },
        layer: { // 有几层
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            selRegion: [],
            provinceList: [],
            cityProps: {
                value: "id",
                label: "label"
            }
        };
    },
    methods: {
        resetRegion() {
            this.selRegion = [];
        },
        // 回显
        returnRegion(region) {
            if(region) {
                this.selRegion = region;
                this.returnData(region);
            }
        },
        returnData(region) {
            getProvince({ token: this.$store.getters.token }).then(response => {
                if(response.success) {
                    var data = response.data;
                    if(this.layer > 1) {
                        for(const i in data) {
                            data[i].children = [];
                        }
                    }
                    this.provinceList = data;

                    const sendData = {
                        provinceId: region[0],
                        token: this.$store.getters.token
                    };
                    var index = this.arrIndex(region);
                    if(this.layer > 1) {
                        getCity(sendData).then(response => {
                            if(response.success) {
                                var data = response.data;

                                if(this.layer > 2) {
                                    for(const i in data) {
                                        data[i].children = [];
                                    }
                                }
                                this.provinceList[index[0]].children = data;

                                const sendData = {
                                    cityId: region[1],
                                    token: this.$store.getters.token
                                };
                                var aIndex = this.arrIndex(region);
                                if(this.layer > 2) {
                                    getDistinct(sendData).then(response => {
                                        if(response.success) {
                                            this.provinceList[aIndex[0]].children[aIndex[1]].children = response.data;
                                            this.$emit("input", region);
                                            var nameArr = this.$refs.regionCascader.currentLabels;
                                            if(nameArr) {
                                                this.$emit("get-region-names", nameArr);
                                            }else {
                                                this.$emit("get-region-names", []);
                                            }
                                            this.$emit("regionObj", nameArr, region);
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        },
        // 城市选择变化
        handlePrivinceChange(val) {
            var length = val.length;
            if(this.layer == length) {
                return;
            }
            if(length == 1) {
                this.updateCity(val);
            }else if(length == 2) {
                this.updateDic(val);
            }
        },

        provinceChange(val) {
            this.$emit("input", val);
            var nameArr = this.$refs.regionCascader.currentLabels;
            if(nameArr) {
                this.$emit("get-region-names", nameArr, 'change');
            }else {
                this.$emit("get-region-names", []);
            }
            this.$emit("regionObj", nameArr, val);
            if(this.changeOnSelect) {
                var length = val.length;
                if(length == 1) {
                    this.updateCity(val);
                }else if(length == 2) {
                    this.updateDic(val);
                }
            }
        },

        // 获取市
        updateCity(val) {
            var provinceId = val[0];
            var index = this.arrIndex(val);
            const sendData = {
                provinceId: provinceId,
                token: this.$store.getters.token
            };
            getCity(sendData).then(response => {
                if(response.success) {
                    var data = response.data;
                    if(this.layer > 2) {
                        for(const i in data) {
                            data[i].children = [];
                        }
                    }
                    this.provinceList[index[0]].children = data;
                }
            });
        },

        // 获取区
        updateDic(val) {
            var cityId = val[1];
            var index = this.arrIndex(val);
            const sendData = {
                cityId: cityId,
                token: this.$store.getters.token
            };
            getDistinct(sendData).then(response => {
                if(response.success) {
                    this.provinceList[index[0]].children[index[1]].children = response.data;
                }
            });
        },

        getProvince() {
            getProvince({ token: this.$store.getters.token }).then(response => {
                if(response.success) {
                    var data = response.data;
                    if(this.layer > 1) {
                        for(const i in data) {
                            data[i].children = [];
                        }
                    }
                    this.provinceList = data;
                }
            });
        },

        // 城市数组匹配找到下标
        arrIndex(val) {
            var data = this.provinceList;
            var temp = [];
            for(const i in data) {
                if(data[i].id == val[0]) {
                    temp.push(i);
                    for(const j in data[i].children) {
                        if(data[i].children[j].id == val[1]) {
                            temp.push(j);
                        }
                    }
                }
            }
            return temp;
        }
    },
    mounted() {
        this.getProvince();
    },
    watch: {
        value(val) {
            if(val == null || val.length == 0) {
                this.getProvince();
                this.selRegion = [];
                this.$emit("get-region-names", []);
                this.$emit("regionObj", [], []);
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
