export default [
    {
      path: '/Bar-demo',
      component: () => import('../../Bar/Bar-demo.vue'),
      name: 'BarDemo'
    },
    {
        path: '/Gauge-demo',
        component: () => import('../../Gauge/Gauge-demo.vue'),
        name: 'GaugeDemo'
      },
      {
        path: '/Line-demo',
        component: () => import('../../Line/Line-demo.vue'),
        name: 'LineDemo'
      },
      {
        path: '/Pie-demo',
        component: () => import('../../Pie/Pie-demo.vue'),
        name: 'PieDemo'
      }
  ]
  