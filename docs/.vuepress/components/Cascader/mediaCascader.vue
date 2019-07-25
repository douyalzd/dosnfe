<template>
    <div>
        <el-cascader
            ref="mediaCascader"
            v-model="selMedia"
            :style="{width: width}"
            :disabled="disabled"
            :size="size"
            :options="mediaTypeList"
            :props="mediaProps"
            :clearable="!isShowAllTxt"
            @active-item-change="clickMedia"
            @change="mediaChange" />
    </div>
</template>
<script>
import { mediaType } from "@/api/components/casCader";
export default {
    props: {
        value: {
            type: null,
            default: null
        },
        width: {
            type: String,
            default: '100%'
        },
        size: {
            type: String,
            default: 'small'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isShowAllTxt: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selMedia: [],
            mediaTypeList: [],
            mediaProps: {
                value: 'mtypeId',
                label: "name"
            }
        };
    },
    methods: {
        returnMedia(vals) {
            if(vals.length === 3) {
                this.selMedia = vals;
                mediaType({ pid: 0 }).then(res => {
                    if(res.success) {
                        var data = res.data;
                        for(const i in data) {
                            data[i].children = [];
                        }
                        this.mediaTypeList = data;
                        if(this.isShowAllTxt) {
                            this.mediaTypeList.unshift({
                                mtypeId: null,
                                name: "全部"
                            });
                        }
                        mediaType({ pid: vals[0] }).then(res1 => {
                            if(res1.success) {
                                var data1 = res1.data;
                                for(const i in data1) {
                                    data1[i].children = [];
                                }
                                var index = this.arrIndex(vals, this.mediaTypeList);
                                this.mediaTypeList[index[0]].children = data1;
                                mediaType({ pid: vals[1] }).then(res2 => {
                                    if(res2.success) {
                                        var data2 = res2.data;
                                        var index = this.arrIndex(vals, this.mediaTypeList);
                                        this.mediaTypeList[index[0]].children[index[1]].children = data2;
                                        var nameArr = this.$refs.mediaCascader.currentLabels;
                                        this.$emit("input", vals[2]);
                                        this.$emit('mediaObj', nameArr, vals);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        },
        clickMedia(val) {
            // console.log('clickMedia', val);
            var length = val.length;
            if(length == 1) {
                this.getMediaTypeTwo(val);
            }else if(length == 2) {
                this.getMediaTypeThree(val);
            }
        },
        mediaChange(val) {
            if(val.length > 0) {
                this.$emit("input", val[val.length - 1]);
                var nameArr = this.$refs.mediaCascader.currentLabels;
                this.$emit('mediaObj', nameArr, val);
            }else {
                this.$emit("input", null);
                this.$emit('mediaObj', [], []);
            }
        },
        // 获取媒体类型
        getMediaTypeOne(id) {
            mediaType({ pid: id }).then(res => {
                if(res.success) {
                    var data = res.data;
                    for(const i in data) {
                        data[i].children = [];
                    }
                    this.mediaTypeList = data;
                    if(this.isShowAllTxt) {
                        this.selMedia = [null];
                        this.mediaTypeList.unshift({
                            mtypeId: null,
                            name: "全部"
                        });
                    }
                }
            });
        },
        // 获取二级媒体
        getMediaTypeTwo(val) {
            var index = this.arrIndex(val, this.mediaTypeList);
            mediaType({ pid: val[0] }).then(res => {
                if(res.success) {
                    var data = res.data;
                    for(const i in data) {
                        data[i].children = [];
                    }
                    this.mediaTypeList[index[0]].children = data;
                }
            });
        },
        // 获取三级媒体
        getMediaTypeThree(val) {
            var index = this.arrIndex(val, this.mediaTypeList);
            mediaType({ pid: val[1] }).then(res => {
                if(res.success) {
                    this.mediaTypeList[index[0]].children[index[1]].children = res.data;
                }
            });
        },
        arrIndex(val, data, type) {
            var temp = [];
            for(const i in data) {
                if(data[i].mtypeId == val[0]) {
                    temp.push(i);
                    for(const j in data[i].children) {
                        if(data[i].children[j].mtypeId == val[1]) {
                            temp.push(j);
                            for(const k in data[i].children[j].children) {
                                if(data[i].children[j].children[k].mtypeId == val[2]) {
                                    temp.push(k);
                                }
                            }
                        }
                    }
                }
            }
            return temp;
        }
    },
    mounted() {
        this.getMediaTypeOne(0);
    },
    watch: {
        value(val) {
            if(val == null || val == []) {
                if(this.isShowAllTxt) {
                    this.selMedia = [null];
                }else {
                    this.selMedia = [];
                }
                this.$emit('mediaObj', null, null);
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
