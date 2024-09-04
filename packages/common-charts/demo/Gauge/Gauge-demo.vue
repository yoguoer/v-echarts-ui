<template>
  <vGauge
    :params="chartParams"
    :data="chartData"
    :height="height"
    :width="width"
    :id="id"
    :loading="loading">
  </vGauge>
</template>

<script setup lang="ts" name="GaugeDataStatsDemo">
import { vGauge } from '@/v-echarts-ui/common-charts';
import { computed, onMounted, ref } from 'vue';

const id = 'GaugeDataStatsDemo';
const chartData = ref();
const width = '300px'; // 可选
const height = '300px'; // 可选
const loading = ref(false); // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {});

const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    width: 300,
    title: '一般',
  };
});

async function getData() {
  try {
    chartData.value = [20, 100];
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData();
});
</script>
