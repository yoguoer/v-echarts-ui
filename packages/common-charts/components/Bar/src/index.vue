<template>
  <div class="container">
    <div class="tools">
      <Tips v-if="showTips && props?.data?.msg" class="tips" :tips="props?.data?.msg" />
      <Checkbox
        v-if="showCheckbox"
        class="checkbox"
        :initChecked="checked"
        @setShowLabel="handleShowLabel" />
    </div>
    <div :id="id" :style="{ height: height, width: width }" ref="chartRef" />
  </div>
</template>

<script setup lang="ts">
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
  params?: Object;
  loading?: Boolean;
}>();

const checked = ref(true);

const chartOptions = computed(() => barOptions(props));

// 定义一个 ref 用于 DOM 引用
const chartRef = ref<HTMLElement | null>(null);
const { chart } = useECharts(chartRef, chartOptions.value, props.data, emit);

function handleShowLabel(newChecked: boolean) {
  checked.value = newChecked;
  setShowLabel(chartOptions.value, newChecked);
  chart.value.setOption(chartOptions.value);
}

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
  .tools {
    display: flex;
    justify-content: flex-end;
    .tips {
      z-index: 1000000000;
      position: relative;
      right: -2px;
      top: 30px;
    }

    .checkbox {
      z-index: 1000000000;
      position: relative;
      right: 0px;
      top: 30px;
    }
  }
}
</style>
