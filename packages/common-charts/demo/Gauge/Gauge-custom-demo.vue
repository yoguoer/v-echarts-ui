<template>
  <vGauge
    :data="chartData"
    :options="chartOptions"
    :params="chartParams"
    :height="height"
    :width="width"
    :id="id"
    :loading="loading" />
</template>

<script setup lang="ts" name="GaugeDataDemo">
import { vGauge } from 'v-echarts-ui'
import { computed, onMounted, ref } from 'vue'

const id = 'GaugeDataDemo'
const chartData = ref([])
const width = '300px' // 可选
const height = '300px' // 可选
const loading = ref(false) // 可选

// 可选，不传则使用默认Options
const chartOptions = computed(() => {
  return {
    toolbox: {
      show: true,
      orient: 'horizontal', // 工具栏icon的布局朝向
      itemSize: 16, // 工具栏icon的大小
      itemGap: 18, // item之间的间距
      right: 15, // toolbox的定位位置
      top: 0,
      iconStyle: {
        color: '#fff',
        borderColor: '#000',
      },
      feature: {
        // 控制工具栏
        saveAsImage: { show: true, title: '导出图片' }, // 导出图片
        dataZoom: { show: true, title: { zoom: '区域缩放', back: '区域还原' } }, // 数据区域缩放
        restore: { show: true, title: '重置' }, // 重置
      },
    },
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 8,
          itemStyle: {
            color: '#e7ff3A',
          },
        },

        axisLine: {
          // x轴刻度线
          show: true,
          lineStyle: {
            width: 8,
            color: [[1, '#f90940']],
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 5,
          distance: 2,
          lineStyle: {
            width: 1,
            color: '#999',
          },
        },
        axisLabel: {
          distance: 5,
          color: '#999',
          fontSize: 12,
        },
        title: {
          show: true,
          fontSize: 20,
          offsetCenter: [0, '125%'],
        },
        anchor: {
          // 指针中心圆点样式
          show: true,
          showAbove: true,
          size: 5,
          itemStyle: {
            borderWidth: 15,
            borderColor: '#e7C03A',
            shadowColor: '#67C23A',
          },
        },
        pointer: {
          // 指针
          show: true,
          showAbove: true,
          itemStyle: {
            color: '#F56C6C',
            borderColor: '#F5006C',
          },
        },
        detail: {
          valueAnimation: true,
          fontSize: 22,
          offsetCenter: [0, '85%'],
          formatter: function (value) {
            return value + '%'
          },
        },
        smooth: true,
        animationDelay: 500,
        animationDuration: 2000,
        data: chartData.value,
      },
    ],
  }
})

const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
  }
})

async function getData() {
  try {
    chartData.value = [{ name: '产品一', value: 80.5 }]
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error)
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData()
})
</script>
