const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
    title: 'DOSN前端文档', // 设置网站标题
    base: '/dosnfe/',
    description: 'DOSN前端组件帮助文档', // 描述
    dest: './dist', // 设置输出目录
    port: 2333, // 端口
    // theme: '@vuepress/vue',
    head: [
        ['link',{rel:'shortcut icon',href: '/favicon.ico' }]
    ],
    themeConfig: { // 主题配置
    // 添加导航栏
        nav: [
            { text: '主页', link: '/' }, // 导航条
            { text: '组件文档', link: '/cmpdocs/' },
            { text: '组件开发规范', link: '/standard/' },
            { text: '知识库', link: '/knowledge/' },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/cmpdocs/': [
                getSidebar("级联选择组件", 'select/'),
                getSidebar("布局类组件", 'base/'),
                getSidebar("表格弹窗组件", 'table/'),
                getSidebar("树形选择组件", 'tree/')
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, './src'),
                "@img": path.join(__dirname, './public')
            }
        }
    }
};




function getSidebar(title, dir) {
    const children = fs
        .readdirSync(path.resolve(__dirname, '../cmpdocs/' + dir))
        .map(filename => dir + filename.slice(0, -3))
        .sort()
    return{
        title: title,
        collapsable: true,
        children: children,
    }
}