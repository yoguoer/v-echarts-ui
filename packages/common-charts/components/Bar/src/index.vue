<template>
  <div class="container">
    <Tools
      :showTips="showTips"
      :showCheckbox="showCheckbox"
      @setShowLabel="handleShowLabel"
      :data="props?.data" />
    <div :id="id" :class="className" :style="{ height: height, width: width }" ref="barChartRef" />
  </div>
</template>

<script setup lang="ts" name="Bar">
import { ref, computed, onBeforeUpdate, defineProps, defineEmits } from 'vue';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
} from 'echarts/components';
import { barOptions } from '../../options/bar';
import { setShowLabel } from '../../options/utils';
import { useEcharts } from '../../mixins/common';
import Tools from '../../Extend/index.vue';

echarts.use([
  BarChart,
  GridComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
]);

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
    type: Object,
    default: () => ({}),
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

const chartOptions = computed(() => barOptions(props));

// 定义一个 ref 用于 DOM 引用
const barChartRef = ref<HTMLElement | null>(null);
const { chart } = useEcharts(barChartRef, chartOptions.value, props.data, emit, props.loading);

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
