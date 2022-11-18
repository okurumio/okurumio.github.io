// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: 'https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220720_132133.ico' }], //favicons，资源放在public文件夹
  ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],

  [
    'meta',
    {
      name: 'keywords',
      content: '二丫讲梵,golang,vue,go-web,go-admin,go-ldap-admin',
    },
  ],
  // ['meta', { name: 'baidu-site-verification', content: 'code-LTKHwOecxI' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
  // 搜索框添加快捷键
  ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
]