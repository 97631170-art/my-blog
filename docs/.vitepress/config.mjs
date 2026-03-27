import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基本信息
  title: "我的个人博客",
  description: "记录生活、分享想法",
  base: '/my-blog/',  // 必须与 GitHub 仓库名一致

  // 主题配置
  themeConfig: {
    // 网站logo（可选，替换为你的图片路径）
    // logo: '/logo.png',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于我', link: '/about' },
    ],

    // 左侧边栏
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '欢迎来到我的博客', link: '/posts/hello-world' },
            { text: '第一篇正式文章', link: '/posts/first-post' },
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/97631170-art' }
    ],

    // 页脚
    footer: {
      message: '用 VitePress 构建',
      copyright: 'Copyright © 2026'
    },

    // 搜索
    search: {
      provider: 'local'
    },

    // 文章页显示最后更新时间
    lastUpdated: {
      text: '最后更新于',
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/97631170-art/my-blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 文档翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端菜单
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '深色模式',
  },

  // Markdown 增强
  markdown: {
    lineNumbers: true,
  },
})
