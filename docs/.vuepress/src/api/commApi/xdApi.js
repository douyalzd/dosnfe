import request from '@/utils/request';

// 通用下拉框接口 例如类型，来源，用途登
export function getSelectData(name, params) {
    return request({
        url: '/dic/' + name,
        method: 'get',
        name: "xdApi",
        params: { vals: params }
    });
}

// 获取国家
export function getCountry(params) {
    return request({
        url: '/dic/country',
        method: 'get',
        name: 'xdApi',
        params
    });
}

// 省市区选择
export function getProvince(params) {
    return request({
        url: '/dic/province',
        method: 'get',
        name: 'xdApi',
        params
    });
}
export function getCity(params) {
    return request({
        url: '/dic/city',
        method: 'get',
        name: 'xdApi',
        params
    });
}
export function getDistinct(params) {
    return request({
        url: '/dic/distinct',
        method: 'get',
        name: 'xdApi',
        params
    });
}

// 获取媒体类型树形 数据
export function getMediaTypeTree() {
    return request({
        url: '/dic/mediumTypeALL',
        method: 'get',
        name: 'xdApi'
    });
}

// 行业树形数据
export function getBusinessTree() {
    return request({
        url: '/industry/listTreeIndustry',
        method: 'get',
        name: 'xdApi'
    });
}

// 获取地区
export function selectRegionByIds(params) {
    return request({
        url: '/areas/selectByIds',
        method: 'get',
        name: 'xdApi',
        params
    });
}

// 获取状态列表
export function getNowDate() {
    return request({
        url: '/xcxApi/getNowDate',
        method: 'post',
        name: 'xdApi'
    });
}

