import request from '@/utils/request';


// 行业级联
export function industry(data) {
    return request({
        url: '/industry/listByPid',
        method: 'get',
        name: 'xdApi',
        params: data
    })
}

// 第三方行业
export function thirdIndustry(data) {
    return request({
        url: '/thirdIndustry/listByPid',
        method: 'get',
        name: 'xdApi',
        params: data
    })
}

// 媒体类型
export function mediaType(params) {
    return request({
        url: '/mediumType/listByPid',
        method: 'get',
        name: 'xdApi',
        params
    })
}