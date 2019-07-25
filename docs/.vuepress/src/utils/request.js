import axios from 'axios';
import { Message } from 'element-ui';

const API = {
    BASE_API: 'http://47.111.92.27:8089/fw',
    XD_API: 'http://47.111.92.27:8090/xd',
    FILE_API: 'http://47.111.92.27:8091/dsyun/file/'
};
let token = localStorage.getItem("token");
// 创建axios实例
const service = axios.create({
    baseURL: API.BASE_API // api的base_url
});


// request拦截器
service.interceptors.request.use(config => {
    // 切换晓道地址
    if(config.name === 'xdApi') {
        config.baseURL = API.XD_API;
    }else if(config.name === 'upload') {
        config.baseURL = API.FILE_API;
    }
    config.headers['X-Token'] = token;
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if(response.config.responseType && response.config.responseType == "arraybuffer") {
        return response;
    }
    if(res.msgCode == '1000') {
        return res;
    }else {
        if(!response.config.hiddenPopup) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            });
        }
        // 15:Token 过期了;
        if(res.msgCode == 15) {
            Message({ message: "您的登录失效，请重新登录！", type: 'error', duration: 5 * 1000 });
            // getToken();
        }
        return Promise.reject(res);
    }
},
error => {
    console.log('err', error);// for debug
    if(error.message) { // 当不为取消请求时出现提示
        Message({ message: error.message, type: 'error', duration: 5 * 1000 });
        getToken();
    }
    return Promise.reject(error);
});

function login(params) {
    return service({
        url: '/employee/login',
        method: 'post',
        params
    });
}

function getToken() {
    service({
        url: '/employee/login',
        method: 'post',
        params: {
            account: 13995519564,
            password: 'admin'
        }
    }).then(response => {
        const data = response.data;
        localStorage.setItem('token', data.tokenId);
        location.reload();
    })
}

if(!token) {
    getToken();
}

export default service;
