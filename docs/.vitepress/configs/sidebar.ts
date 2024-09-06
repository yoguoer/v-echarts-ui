export default {
  '/zh-CN/guide': [
    {
      text: '使用指南',
      items: [
        {
          text: '入门',
          items: [
            { text: '使用图表', link: '/zh-CN/guide/howToUse' },
            { text: '使用筛选项', link: '/zh-CN/guide/howToSearch' },
          ],
        },
        { text: '基础图表', link: '/zh-CN/guide/common-charts' },
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
            { text: '入门介绍', link: '/zh-CN/components/common-charts/Bar/readme' },
            { text: '基础条形图', link: '/zh-CN/components/common-charts/Bar/bar' },
            { text: '堆叠条形图', link: '/zh-CN/components/common-charts/Bar/barStack' },
          ],
        },
        { text: '折线图', link: '/zh-CN/components/common-charts/Line/line' },
        { text: '饼图', link: '/zh-CN/components/common-charts/Pie/pie' },
        { text: '仪表盘', link: '/zh-CN/components/common-charts/Gauge/gauge' },
      ],
    },
    {
      text: '动态图表',
      items: [
        { text: '带搜索的条形图', link: '/zh-CN/components/common-charts/Bar/barSearch' },
        { text: '带搜索的折线图', link: '/zh-CN/components/common-charts/Line/lineSearch' },
        { text: '带搜索的饼图', link: '/zh-CN/components/common-charts/Pie/PieSearch' },
      ],
    },
  ],
};
