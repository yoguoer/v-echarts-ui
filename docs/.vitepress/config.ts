import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'
import { docsSite } from '../../config/site'

export default defineConfig({
  title: 'v-echarts',
  description: 'v-echarts 是一个基于echarts和Vue3封装的图表组件库，主要用于快速构建数据可视化页面。',
  base: `${docsSite}/`,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/${docsSite}/favicon.ico`
      }
    ]
  ],
  // lastUpdated: true,
  themeConfig: {
    logo: '/img/vivien-logo.svg',
    // siteTitle: 'v-echarts',
    // outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yoguoer' }
    ],
    nav,
    sidebar,
    footer,
    search: {
      provider: 'local'
    }
  },
})
