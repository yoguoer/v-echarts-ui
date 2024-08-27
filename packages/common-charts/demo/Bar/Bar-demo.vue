<template>
  <vBar
    :data="chartData"
    :options="chartOptions"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :showTips="true"
    :id="id"
    :loading="false" />
</template>

<script setup lang="ts">
import vBar from '../../components/Bar';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const id = 'bar';
const chartData = ref();
const chartOptions = ref({});
const width = '100%';
const height = '500px';
// 在组件挂载后获取数据
onMounted(() => {
  getData();
});

async function getData() {
  const formData = { stat_config_key: 'rdEfficiencyByMonth' };
  try {
    const response = await axios.post('http://10.118.1.89:8086/stat/charts/histogram', formData);
    chartData.value = response.data.data.data;
    console.log('==response==', response, chartData.value);
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}
</script>
