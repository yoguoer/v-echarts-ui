<template>
  <vLineSearch
    :data="chartData"
    :params="chartParams"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :showTips="true"
    :id="id"
    :loading="loading"
    :searchOptions="searchOptions"
    @changeAfter="changeAfter" />
</template>

<script setup lang="ts" name="BarSearchDemo">
import { vLineSearch } from 'v-echarts-ui'
import { computed, onMounted, ref, reactive } from 'vue'

// 响应数据
let data = reactive({
  username: '测试一下',
  view: '0',
})
// from 表单配置项
const searchOptions = {
  mode: data,
  attr: {
    'label-width': 'auto',
  },
  items: [
    [
      {
        span: 6,
        attr: {
          prop: 'username',
          label: '目的',
        },
        component: {
          comp: 'el-input',
        },
      },
      {
        span: 2,
        attr: {
          prop: 'view',
          'label-width': '30px',
        },
        component: {
          comp: 'el-radio-group',
          children: [
            {
              comp: 'el-radio',
              attr: {
                value: '0',
                label: '月视图',
              },
            },
            {
              comp: 'el-radio',
              attr: {
                value: '1',
                label: '周视图',
              },
            },
          ],
        },
      },
    ],
  ],
}

const id = 'BarSearchDemo'
const chartData = ref({})
const width = '80%' // 可选
const height = '500px' // 可选
const loading = ref(true) // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {})
const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    position: 'top', // 柱状图数字提示位置
    isCross: false, // 柱状图是否为横向,
  }
})

async function getData() {
  try {
    chartData.value =
      data.view === '0'
        ? {
            xAxis: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月',
            ],
            series: [
              {
                name: 2023,
                data: [1.26, 1.13, 1.1, 1.09, 1.08, 1.09, 1.1, 1.11, 1.13, 1.14, 1.13, 1.14],
              },
              {
                name: 2024,
                data: [1.2, 1.28, 1.27, null, null, null, null, null, null, null, null, null],
              },
            ],
            row: [
              {
                month: '2024-01',
              },
              {
                month: '2024-02',
              },
              {
                month: '2024-03',
              },
              {
                month: '2023-04',
              },
              {
                month: '2023-05',
              },
              {
                month: '2023-06',
              },
              {
                month: '2023-07',
              },
              {
                month: '2023-08',
              },
              {
                month: '2023-09',
              },
              {
                month: '2023-10',
              },
              {
                month: '2023-11',
              },
              {
                month: '2023-12',
              },
            ],
            msgTitle: '计算方法',
            msg: '研发人效指数=单位时间内项目标准工时/单位时间内项目申报工时',
          }
        : {
            xAxis: ['1周', '2周', '3周', '4周', '5周', '6周', '7周'],
            series: [
              {
                name: 2023,
                data: [1.76, 1.03, 1.1, 1.09, 0.08, 1.09, 1.1],
              },
              {
                name: 2024,
                data: [1.6, 1.28, 1.37, 1.01, 1.13, 1.14, 1.13],
              },
            ],
            row: [
              {
                month: '2024-01',
              },
              {
                month: '2024-02',
              },
              {
                month: '2024-03',
              },
              {
                month: '2023-04',
              },
              {
                month: '2023-05',
              },
              {
                month: '2023-06',
              },
              {
                month: '2023-07',
              },
              {
                month: '2023-08',
              },
              {
                month: '2023-09',
              },
              {
                month: '2023-10',
              },
              {
                month: '2023-11',
              },
              {
                month: '2023-12',
              },
            ],
            msgTitle: '计算方法',
            msg: '研发人效指数=单位时间内项目标准工时/单位时间内项目申报工时',
          }
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error)
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData()
})

function changeAfter(val) {
  data[val.prop] = val.value
  console.log('🚀搜索条件发生了变化:', val)
  getData()
}
</script>
