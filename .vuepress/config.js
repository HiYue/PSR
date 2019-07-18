/**
 * 一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象
 */

module.exports = {
    // theme: 'ktquez',
    title: "PHP PSR 建议解读与分析",
    //  description: "PHP的PSR是关于PHP编程与通用的一些核心功能模块的若干规范, 它尝试为PHP中的编程概念提供标准化的解决方案. yue.dev 提供对这些建议的文档, 重点解读和使用分析",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // 顶部导航栏
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'PSR规范列表',
                items: [
                    {text: 'PSR-15', link: '/psr-15/'},
                    {text: 'PSR-4', link: '/psr-4/'},
                    {text: 'PSR-7', link: '/psr-7/'},
                ]
            }
        ],
        // 侧边栏
        sidebar: 'auto',
        //Git 仓库和编辑链接
        repo: 'HiYue/PSR',
        repoLabel: 'Yue@Github'
    }
}