import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'

export default defineConfig({
  title: 'v-echarts图表组件文档',
  description: '基于echarts图表组件封装使用',
  lang: 'zh-CN',
  base: '/v-echarts',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'v-echarts',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yoguoer' }
    ],
    nav,
    sidebar,
    footer
  },
})
