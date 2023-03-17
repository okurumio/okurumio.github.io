// 插件配置
module.exports = [
  // 全文搜索插件
  'fulltext-search',
  'vuepress-plugin-mermaidjs',
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
        {
            name: 'custom-plugins',
            globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        }
    ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: 'ヾ(≧▽≦*)o欢迎回来！',
      hideIcon: '/failure.ico',
      hideText: 'ಥ_ಥ不要走呀！',
      recoverTime: 5000,   //  持续时间
    },
  ],
  // 顶部阅读进度插件
  [
    'reading-progress'
  ],
  // 回到顶部
  // ['go-top'],
  // 增强 markdown
  ["md-enhance", {
      // 启用 TeX 支持
      tex: true,
      // Enable mermaid
      mermaid: true,
      // 启用流程图
      flowchart: true,
    },],
]
