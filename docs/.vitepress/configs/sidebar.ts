export default {
  '/zh-CN/guide': [
    {
      text: '使用指南',
      items: [
        {
          text: '入门',
          items: [
            { text: '环境准备', link: '/zh-CN/guide/howToUse' },
            { text: '使用筛选项', link: '/zh-CN/guide/howToSearch' },
            { text: '使用图表', link: '/zh-CN/guide/common-charts' },
          ],
        },
      ],
    },
  ],
  '/zh-CN/components/': [
    {
      text: '基础图表',
      items: [
        {
          text: '条形图',
          items: [
            { text: '基础条形图', link: '/zh-CN/components/common-charts/Bar/bar' },
            { text: '堆叠条形图', link: '/zh-CN/components/common-charts/Bar/barStack' },
            { text: '条形图搜索', link: '/zh-CN/components/common-charts/Bar/barSearch' },
          ],
        },
        {
          text: '折线图',
          items: [
            { text: '基础折线图', link: '/zh-CN/components/common-charts/Line/line' },
            { text: '折线图搜索', link: '/zh-CN/components/common-charts/Line/lineSearch' },
          ],
        },
        {
          text: '饼图',
          link: '/zh-CN/components/common-charts/Pie/pie',
          items: [
            { text: '基础饼图', link: '/zh-CN/components/common-charts/Pie/pie' },
            { text: '饼图搜索', link: '/zh-CN/components/common-charts/Pie/pieSearch' }
          ],
        }, 
        {
          text: '仪表盘',
          link: '/zh-CN/components/common-charts/Gauge/gauge',
          items: [
            { text: '基础仪表盘', link: '/zh-CN/components/common-charts/Gauge/gauge' },
            { text: '仪表盘搜索', link: '/zh-CN/components/common-charts/Gauge/gaugeSearch' },
          ],
        }, 
      ],
    },
  ],
}
