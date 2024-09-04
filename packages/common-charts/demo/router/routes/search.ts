export default [
  {
    path: '/Basic-demo',
    component: () => import('../../BasicComponent/Basic-demo.vue'),
    name: 'BasicDemo',
  },
  {
    path: '/Search-demo',
    component: () => import('../../Search/Search-demo.vue'),
    name: 'SearchDemo',
  },
]
