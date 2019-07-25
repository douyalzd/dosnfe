<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="8">
            <el-select v-model="regionObj.province" placeholder="请选择省" size="small" @change="getCityList">
                <el-option v-for="item in provinceList" :key="item.id" :label="item.label" :value="item.id" />
            </el-select>
        </el-col>
        <el-col :span="8" style="margin-left: 10px;">
            <el-select v-model="regionObj.city" placeholder="请选择市" size="small" @change="getDistinctList">
                <el-option v-for="item in cityList" :key="item.id" :label="item.label" :value="item.id" />
            </el-select>
        </el-col>
        <el-col :span="8" style="margin-left: 10px;">
            <el-select v-model="regionObj.area" placeholder="请选择区" size="small" @change="getDistinctChange">
                <el-option v-for="item in distinctList" :key="item.id" :label="item.label" :value="item.id" />
            </el-select>
        </el-col>
    </el-row>
</template>

<script>
import { getProvince, getCity, getDistinct } from "@/api/commApi/xdApi.js";
export default {
    props: {
        // eslint-disable-next-line vue/require-default-prop
        mapRef: {
            type: null
        }
    },
    data() {
        return {
            provinceList: [],
            cityList: [],
            distinctList: [],
            regionId: {
                province: null,
                city: null,
                area: null
            },
            regionObj: {
                province: null,
                city: null,
                area: null
            }
        };
    },
    methods: {
        // 获取省
        getProvinceList() {
            getProvince({ countryId: 1 }).then(res => {
                this.provinceList = res.data;
            });
        },

        // 获取市
        getCityList(id) {
            getCity({ provinceId: id }).then(res => {
                this.cityList = res.data;
                this.regionId.city = '';
                this.regionId.area = '';
            });
            this.regionObj.province = this.provinceList.find(item => item.id === id);
            this.mapRef.zoomMapByCity(this.regionObj.province.label);
        },

        // 获取区
        getDistinctList(id) {
            getDistinct({ cityId: id }).then(res => {
                this.distinctList = res.data;
                this.regiregionIdonObj.area = '';
            });
            this.regionObj.city = this.cityList.find(item => item.id == id);
            this.mapRef.zoomMapByCity(this.regionObj.city.label);
        },

        // 选择区时
        getDistinctChange(id) {
            this.regionObj.area = this.distinctList.find(item => item.id === id);
            this.mapRef.zoomMapByCity(this.regionObj.area.label);
        }
    }
};
</script>
