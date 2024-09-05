<template>
  <vPie
    :data="chartData"
    :params="chartParams"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :id="id"
    :loading="loading" />
</template>

<script setup lang="ts" name="PieDemo">
import { vPie } from 'v-echarts-ui';
import { computed, onMounted, ref } from 'vue';

const id = 'PieDemo';
const chartData = ref([]);
const width = '100%'; // 可选
const height = '300px'; // 可选
const loading = ref(false); // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {});

const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    showLegend: true,
    isNested: {
      show: false, // 是否为环形
    },
  };
});

async function getData() {
  try {
    chartData.value = [
      { name: '项目类', value: 20 },
      { name: '平台类', value: 80 },
    ];
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData();
});
</script>
