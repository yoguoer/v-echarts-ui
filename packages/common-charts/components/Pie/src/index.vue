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
    <div :id="id" :class="className" :style="{ height: height, width: width }" ref="pieChartRef" />
  </div>
</template>

<script setup lang="ts" name:="Pie">
import { ref, computed, onBeforeUpdate, defineProps, defineEmits, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { pieOptions } from '../../options/pie';
import Tips from '../../Extend/Tips.vue';
import Checkbox from '../../Extend/Checkbox.vue';
import { setShowLabel } from '../../options/utils';
import { useEcharts } from '../../mixins/common';

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
    type: Array,
    default: () => ([]),
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

const checked = ref(props?.showCheckbox);

const chartOptions = computed(() => pieOptions(props));
const loading = ref(props?.loading);

// 定义一个 ref 用于 DOM 引用
const pieChartRef = ref<HTMLElement | null>(null);
const { chart } = useEcharts(
  pieChartRef,
  chartOptions.value,
  props.data,
  emit,
  loading.value,
  // checked,
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
