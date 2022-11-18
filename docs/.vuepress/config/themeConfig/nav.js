// nav
module.exports = [
  {text: '编程', link: '/programing/',
    items: [
      {text: '编程语言',
        items:[
            {text: 'python', link: '/language/python/'},
            {text: 'java', link: '/language/java/'},
            {text: 'javascript', link: '/language/javascript/'},
            {text: 'c++', link: '/language/c++/'},
            {text: '汇编', link: '/language/assembly/'},
        ]
      },
      {text: '数据',
        items:[
            {text: '数据库', link: '/data/database/'},
            {text: '消息队列', link: '/data/mesqueue/'},
            {text: '数据同步', link: '/data/synchronization/'},
        ]
      },
      {text: '系统',
        items:[
            {text: '操作系统', link: '/system/os/'},
            {text: '运维', link: '/system/ops/'},
        ]
      },
    ]
  },
  { text: 'Cybersecurity', link: '/cs/',
      items: [
          {text: '逆向工程', link: '/cs/reverse/'},
          {text: '密码学', link: '/cs/cryptology/'},
      ]
  },
  { text: 'DS',link: '/ds/',
      items: [
          {text: 'Spider', link: '/ds/spider/'},
          {text: 'DataProcess', link: '/ds/dp/'},
          {text: 'Math', link: '/ds/math/'},
          {text: 'MachineLearning', link: '/ds/ml/'},
          {text: 'DeepLearning', link: '/ds/dl/'},
      ]
  },
  { text: 'Tools', link: '/tools/' },
  { text: '其他', link: '/other/' },
  // { text: '留言板', link: '/message-board/' },
  // { text: 'Mybolg', link: 'https://github.com/okurumio' },
]