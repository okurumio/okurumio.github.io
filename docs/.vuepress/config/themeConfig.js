const nav = require('./themeConfig/nav.js');
// const sidebar = require('./themeConfig/sidebar.js');
const { penName, link, avatar, name, slogan } = require("../common/info");

// 主题配置
module.exports = {
  nav, // 顶部导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: 'https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220720_132208.png', // 导航栏logo
  repo: 'okurumio', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  editLinks: false, // 启用编辑链接
  docsDir: 'docs', // 编辑的文件夹
  docsBranch: 'main', // 编辑的分支
  editLinkText: '帮助我们改善此页面',
  // searchPlaceholder: "按下 𝑺 搜索",  // 可选：搜索栏占位文本，默认："$ grep ..."

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: '/background/bg.jpg',
  bodyBgImgOpacity: 0.6,// body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  // 首页大图片配置
  indexImg: {
    navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: false, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: [
      "transparent",
      "transparent",
      "transparent",
      "transparent",
    ], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
    descFade: true, // 是否开启图片中间描述的淡入淡出效果，默认为 false
    desc: [
      "如今你的气质里，藏着你走过的路，读过的书和爱过的人。 —— 《卡萨布兰卡》",
    ], // 多条描述，如果填写则覆盖 index.md 的 tagline，不填写则默认读取 index.md 的 tagline，descFadeIn 为 true 生效
    descFontSize: "1.4rem", // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800, // 当有多个 desc 时，一个 desc 展示完后或准备开始时，多少时间后出现下一个 desc，默认 800 毫秒
    bubble: false, // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200, // 气泡的个数，bubble 为 true 生效，默认 200 个
  },

  sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  pageStyle: 'card', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框
  updateBar: { // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
  },
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: penName, // 必需
    link: link, // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar,
    name,
    slogan, // 个性签名
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/eryajf',
      },
      {
        iconClass: 'icon-weixin',
        title: '微信',
        link: 'mailto:eryajf@163.com',
      },
      {
        iconClass: 'icon-bilibili',
        title: 'bilibili',
        link: 'https://gitee.com/eryajf',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2022, // 博客创建年份
    copyrightInfo:
      'chara | <a href="https://github.com/okurumio/okurumio.github.io/blob/main/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  }
}
