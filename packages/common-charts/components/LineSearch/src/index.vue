<template>
  <div :class="[`${prefixCls}`]">
    <vSearch :options="searchOptions" v-on="$attrs" v-bind="$attrs" />
    <vLine
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

<script setup lang="ts" name="LineSearch">
import { defineProps } from 'vue'
import { vLine } from '../../Line'
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
  searchOptions: {
    type: Object,
    default: () => ({}),
  },
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('line-search')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-line-search';
.@{prefix-cls} {
  position: relative;
}
</style>
