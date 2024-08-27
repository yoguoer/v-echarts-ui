<template>
  <div class="container">
    <Tips v-if="showTips && props?.data?.msg" class="tips" :tips="props?.data?.msg" />
    <Checkbox
      v-if="showCheckbox"
      class="checkbox"
      :initChecked="checked"
      @setShowLabel="handleShowLabel" />
    <div :id="id" :style="{ height: height, width: width }" ref="chartRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUpdate, onMounted, defineProps } from 'vue';
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
import Tips from '../../Extend/Tips.vue';
import Checkbox from '../../Extend/Checkbox.vue';
import { barOptions } from '../../options/bar.ts';
import { setShowLabel } from '../../options/utils.ts';
import { useECharts } from '../../mixins/common.ts';

// 注册必须的 echarts 组件
echarts.use([
  BarChart,
  GridComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
]);

// 定义 props
const props = defineProps<{
  id: string;
  height?: string;
  width?: string;
  showCheckbox?: boolean;
  showTips?: boolean;
  className?: String;
  options?: Object;
  data?: Object;
  loading?: Boolean;
  params?: Object;
}>();
const checked = ref(true);

const chartOptions = computed(() => barOptions(props));

// 定义一个 ref 用于 DOM 引用
const chartRef = ref<HTMLElement | null>(null);
const { chart } = useECharts(chartRef, chartOptions.value, props.data);

function handleShowLabel(newChecked: boolean) {
  checked.value = newChecked;
  setShowLabel(chartOptions.value, newChecked);
  chart.value.setOption(chartOptions.value);
}

// 生命周期钩子
onMounted(() => {});
onBeforeUpdate(() => {
  chart.value.setOption(chartOptions.value);
});
</script>
<script lang="ts">
export default {
  name: 'Bar',
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;

  .tips {
    z-index: 1000000000;
    position: absolute;
    right: 14px;
    top: 6px;
    width: 15px;
  }

  .checkbox {
    z-index: 1000000000;
    position: absolute;
    right: -5px;
    top: 0;
  }
}
</style>
