<template>
  <div :class="[`${prefixCls}`]">
    <vSearch :options="searchOptions" v-on="$attrs" v-bind="$attrs" />
    <vPie
      :data="data"
      :options="options"
      :params="params"
      :height="height"
      :width="width"
      :showCheckbox="showCheckbox"
      :showTips="showTips"
      :id="id"
      :loading="loading"
      v-on="$attrs"
      v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="PieSearch">
import { defineProps } from 'vue'
import { vPie } from '../../Pie'
import { vSearch } from '../../Search'
import { useDesign } from '../../../hooks/useDesign'

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
  searchOptions: {
    type: Object,
    default: () => ({}),
  },
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('pie-search')
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-pie-search';
.@{prefix-cls} {
  position: relative;
}
</style>
