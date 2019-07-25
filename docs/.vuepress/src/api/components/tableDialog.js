import request from '@/utils/request';

// 所有合同列表
export function contractList(pageNum, pageSize, params) {
    return request({
        url: '/contract/listContractForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 我的合同
export function myContractList(pageNum, pageSize, params) {
    return request({
        url: '/contract/listMyContractForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}


// 我的采购合同
export function myPurchaseContract(pageNum, pageSize, params) {
    return request({
        url: '/install/listPurchaseContract/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 销售合同
export function sellContract(pageNum, pageSize, params) {
    return request({
        url: 'sellContract/listSelectst/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}


// 合同类型
export function contractType() {
    return request({
        url: '/dic/contractType',
        method: 'get',
        name: 'xdApi'
    });
}

// 用款申请列表
export function useMoneyList(pageNum, pageSize, params) {
    return request({
        url: '/applyMoney/listForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 我的用款申请列表
export function myUseMoneyList(pageNum, pageSize, params) {
    return request({
        url: '/applyMoney/listMyApplyForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 用款申请用途
export function useMoneyPurpose() {
    return request({
        url: '/dic/applyMoneyPurpose',
        method: 'get',
        name: 'xdApi'
    });
}

// 获取外购公司列表
export function outsourceList(pageNum, pageSize, params) {
    return request({
        url: '/outsourceData/listOutsource/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}


// 社区下拉列表
export function communityList(pageNum, pageSize, params) {
    return request({
        url: '/community/listPageSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 客服社区
export function csCommunityList(pageNum, pageSize, params) {
    return request({
        url: '/cscommunity/listPageSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 所有的社区
export function csAllCommunityList(pageNum, pageSize, params) {
    return request({
        url: '/cscommunity/listSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 方案选择
export function designList(pageNum, pageSize, params) {
    return request({
        url: '/design/listPageSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 查渠道所有的
export function chennelSelect(pageNum, pageSize, params) {
    return request({
        url: '/channel/listForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 查渠道自己的
export function myChannelSelect(pageNum, pageSize, params) {
    return request({
        url: '/channel/listMySelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

export function getClientBrand(params) {
    return request({
        url: '/channel/getClientBrand',
        method: 'get',
        params
    });
}

// 选择我的品牌
export function myBrandSelect(pageNum, pageSize, params) {
    return request({
        url: '/brand/listMyBrand/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

export function myChannelBrandSelect(pageNum, pageSize, params) {
    return request({
        url: '/channel/listMyBrand/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择所有品牌
export function brandSelect(pageNum, pageSize, params) {
    return request({
        url: '/brand/select/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择所有客户
export function customerSelect(pageNum, pageSize, params) {
    return request({
        url: '/client/listForSelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择我的客户
export function myCustomerSelect(pageNum, pageSize, params) {
    return request({
        url: '/client/listMySelect/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择资源客户 : 物业,外购公司,业委会,其他
export function clientList(pageNum, pageSize, params) {
    return request({
        url: '/zyzApply/listClient/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择资源客户 : 物业,外购公司,业委会,其他
export function clientType(params) {
    return request({
        url: '/dic/zclientType',
        method: 'get',
        name: 'xdApi',
        params
    });
}


// 选择我的机会
export function myChanceSelect(pageNum, pageSize, params) {
    return request({
        url: '/chance/listMyChance/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 选择所有机会
export function chanceSelect(pageNum, pageSize, params) {
    return request({
        url: '/chance/list/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}


// 发票
export function invoiceList(pageNum, pageSize, params) {
    return request({
        url: '/invoice/listProcessed/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 客服素材库列表
export function materialList(pageNum, pageSize, params) {
    return request({
        url: '/material/getMaterialListForDesign/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}

// 资源 - 供应方管理列表
export function supplierList(pageNum, pageSize, params) {
    return request({
        url: '/csmedium/property/list/' + pageNum + '/' + pageSize,
        method: 'get',
        params
    });
}
