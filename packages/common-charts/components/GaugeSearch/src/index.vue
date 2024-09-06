<template>
  <div :class="[`${prefixCls}`]">
    <vSearch :options="searchOptions" v-on="$attrs" v-bind="$attrs" />
    <vGauge
      :data="data"
      :options="options"
      :params="params"
      :height="height"
      :width="width"
      :id="id"
      :loading="loading"
      v-on="$attrs"
      v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="GaugeSearch">
import { defineProps } from 'vue'
import { vGauge } from '../../Gauge'
import { vSearch } from '../../Search'
import { useDesign } from '../../../hooks/useDesign'

const props = defineProps({
  id: {
    type: String,
    default: 'GuageChart',
    require: true,
  },
  height: {
    type: String,
    default: '300px',
  },
  width: {
    type: String,
    default: '300px',
  },
  dataFormat: {
    type: Function,
    default: null,
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
  searchOptions: {
    type: Object,
    default: () => ({}),
  },
})


const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('gauge-search')
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-search';
.@{prefix-cls} {
  position: relative;

  &::deep canvas {
    cursor: pointer;
  }
}
</style>
