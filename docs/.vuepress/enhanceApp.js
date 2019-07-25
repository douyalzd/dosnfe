/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueECharts from 'vue-echarts' // 注册图表

import './public/css/index.scss'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    isServer
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS);
    Vue.use(Element);
    Vue.component('chart', VueECharts);
    if (!isServer) {
        import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
            Vue.use(module.default)
        })
    }
};


  
