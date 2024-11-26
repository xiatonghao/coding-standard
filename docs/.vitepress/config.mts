import { defineConfig } from 'vitepress'

const items = [
  {
    text: 'HTML规范',
    link: '/code/html/'
  },
  {
    text: 'CSS规范',
    link: '/code/css/'
  },
  {
    text: 'JavaScript规范',
    link: '/code/js/'
  },
  {
    text: 'TypeScript规范',
    link: '/code/ts/'
  },
  {
    text: 'Vue规范',
    link: '/code/vue/'
  }
]

export default defineConfig({
  base: '/coding-standard/',
  title: 'Web前端代码规范',
  lang: 'zh-CN',
  description: 'Web前端代码规范',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/coding-standard/ico.jpg' }],
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页导航',
    lastUpdatedText: '上次更新时间',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiatonghao/coding-standard' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文件命名规范',
        link: '/name/'
      },
      {
        text: '前端代码规范',
        items: [...items]
      },
      {
        text: 'Git规范',
        link: '/git/'
      },
    ],
    sidebar: {
      '/code/': [
        {
          text: '代码规范',
          items: [...items]
        },
      ]
    },
    footer: {
      message: 'MIT Licensed.',
      copyright: 'Copyright © 2024-present xiatonghao'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
