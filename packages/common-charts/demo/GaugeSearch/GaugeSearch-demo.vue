<template>
  <vGaugeSearch
    :data="chartData"
    :params="chartParams"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :id="id"
    :loading="loading"
    :searchOptions="searchOptions"
    @changeAfter="changeAfter" />
</template>

<script setup lang="ts" name="GaugeSearchDemo">
import { vGaugeSearch } from 'v-echarts-ui'
import { computed, onMounted, ref, reactive } from 'vue'

// 响应数据
let data = reactive({
  username: '测试一下仪表盘Search',
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
                label: '进度',
              },
            },
            {
              comp: 'el-radio',
              attr: {
                value: '1',
                label: '数量',
              },
            },
          ],
        },
      },
    ],
  ],
}

const id = 'PieSearchDemo'
const chartData = ref([])
const width = '100%' // 可选
const height = '300px' // 可选
const loading = ref(false) // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {});

const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    showLegend: true,
    isNested: {
      show: false, // 是否为环形
    },
  }
})

async function getData() {
  try {
    chartData.value =
      data.view === '0'
        ?[20, 100]
        : [18, 90]
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
