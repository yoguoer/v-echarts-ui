<template>
  <vBar
    :data="chartData"
    :params="chartParams"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :id="id"
    :loading="loading" />
</template>

<script setup lang="ts" name="BarStackDemo">
import { vBar } from '@/v-echarts-library/common-charts';
import { computed, onMounted, ref } from 'vue';

const id = 'BarStackDemo';
const chartData = ref({});
const width = '100%'; // 可选
const height = '400px'; // 可选
const loading = ref(true); // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {});

const chartParams = computed(() => {
  return {
    showToolBox: true,
    isCross: false,
    stackLabel: ['none', 'apply', 'apply', 'standard'], // 效果同 stackIndex: [1,2]
    dataset: false,
    showAverage: false,
  };
});

async function getData() {
  try {
    chartData.value = {
      xAxis: ['管理室', '数字化室'],
      series: [
        {
          name: '打卡工时',
          data: [220, 430],
        },
        {
          name: '项目工时',
          data: [80, 247],
        },
        {
          name: '平台工时',
          data: [144, 20],
        },
        {
          name: '标准工时',
          data: [18, 17.64],
        },
      ],
    };
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData();
});
</script>
