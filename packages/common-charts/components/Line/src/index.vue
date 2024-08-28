<template>
  <div class="container">
    <div class="tools">
      <Tips
        v-if="showTips && props?.data?.msg"
        class="tips"
        :tips="props?.data?.msg"
        :title="props?.data?.msgTitle" />
      <Checkbox
        v-if="showCheckbox"
        class="checkbox"
        :initChecked="checked"
        @setShowLabel="handleShowLabel" />
    </div>
    <div :id="id" :class="className" :style="{ height: height, width: width }" ref="lineChartRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUpdate, defineProps, defineEmits, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import Tips from '../../Extend/Tips.vue';
import Checkbox from '../../Extend/Checkbox.vue';
import { lineOptions } from '../../options/line';
import { setShowLabel } from '../../options/utils';
import { useECharts } from '../../mixins/common';

import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent,
} from 'echarts/components';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent,
  LineChart,
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
    dfault: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const checked = ref(props?.showCheckbox);

const chartOptions = computed(() => lineOptions(props));
const loading = ref(props?.loading);

// 定义一个 ref 用于 DOM 引用
const lineChartRef = ref<HTMLElement | null>(null);
const { chart } = useECharts(
  lineChartRef,
  chartOptions.value,
  props.data,
  emit,
  loading.value,
//   checked,
);

function handleShowLabel(newChecked: boolean) {
  checked.value = newChecked;
  setShowLabel(chartOptions.value, newChecked);
  chart.value.setOption(chartOptions.value);
}

onBeforeUpdate(() => {
  loading.value = false;
  chart.value.setOption(chartOptions.value);
});
onMounted(() => {
    loading.value = false;
});
</script>
<script lang="ts">
export default {
  name: 'Line',
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
      right: 15px;
      top: 30px;
    }

    .checkbox {
      z-index: 1000000000;
      position: relative;
      right: 10px;
      top: 30px;
    }
  }
}
</style>
