import request from '@/utils/request';

// 基础接口 - 获取员工树状结构
export function employeeList(params) {
    return request({
        url: '/employee/listForTree',
        method: 'get',
        params
    });
}

// 基础接口 - 获取员工树状结构
export function employeesList(params) {
    return request({
        url: '/employee/listForTreeAllCheck',
        method: 'get',
        params
    });
}


// 基础接口 - 获取修改意见
export function designOpinionList(params) {
    return request({
        url: '/designOpinion/list',
        method: 'post',
        params
    });
}
