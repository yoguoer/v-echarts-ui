export default [
  {
    path: '/Bar-demo',
    component: () => import('../../Bar/Bar-demo.vue'),
    name: 'BarDemo',
  },
  {
    path: '/Bar-stack-demo',
    component: () => import('../../Bar/Bar-stack-demo.vue'),
    name: 'BarStackDemo',
  },
  {
    path: '/Line-demo',
    component: () => import('../../Line/Line-demo.vue'),
    name: 'LineDemo',
  },
  {
    path: '/Pie-demo',
    component: () => import('../../Pie/Pie-demo.vue'),
    name: 'PieDemo',
  },
  {
    path: '/Gauge-demo',
    component: () => import('../../Gauge/Gauge-demo.vue'),
    name: 'GaugeDemo',
  },
  {
    path: '/Gauge-custom-demo',
    component: () => import('../../Gauge/Gauge-custom-demo.vue'),
    name: 'GaugeCustomDemo',
  },
];
