<template>
  <div class="container">
    <Tools :showTips="showTips" :showCheckbox="showCheckbox" @setShowLabel="handleShowLabel" />
    <div :id="id" :class="className" :style="{ height: height, width: width }" ref="pieChartRef" />
  </div>
</template>

<script setup lang="ts" name:="Pie">
import { ref, computed, onBeforeUpdate, defineProps, defineEmits, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { pieOptions } from '../../options/pie';
import { setShowLabel } from '../../options/utils';
import { useEcharts } from '../../mixins/common';
import Tools from '../../Extend/index.vue';

echarts.use([PieChart]);

const emit = defineEmits([
  `chart-click`,
  'chart-dblclick',
  'chart-mousedown',
  'chart-mousemove',
  'chart-mouseup',
  'chart-mouseover',
  'chart-mouseout',
  'chart-globalout',
  'chart-contextmenu',
  'chart-legendselectchanged',
]);

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: '500px',
  },
  width: {
    type: String,
    default: '100%',
  },
  showCheckbox: {
    type: Boolean,
    default: true,
  },
  showTips: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: null,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Array,
    default: () => [],
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const chartOptions = computed(() => pieOptions(props));

// 定义一个 ref 用于 DOM 引用
const pieChartRef = ref<HTMLElement | null>(null);
const { chart } = useEcharts(pieChartRef, chartOptions.value, props.data, emit, props.loading);

function handleShowLabel(newChecked: boolean) {
  setShowLabel(chartOptions.value, newChecked);
  chart.value.setOption(chartOptions.value);
}

onBeforeUpdate(() => {
  chart.value.setOption(chartOptions.value);
});
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
