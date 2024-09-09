<template>
  <div
    :class="{
      [`${prefixCls}-tools-all`]: showTips,
      [`${prefixCls}-tools-one`]: !(showTips && props?.data?.msg && showCheckbox),
    }">
    <Tips
      v-if="showTips && props?.data?.msg"
      class="tips"
      :tips="props?.data?.msg"
      :title="props?.data?.msgTitle" />
    <Checkbox
      v-if="showCheckbox"
      class="checkbox"
      :initChecked="checked"
      @setShowLabel="setShowLabel" />
  </div>
</template>
<script setup lang="ts" name="Tools">
import { ref, defineProps, defineEmits } from 'vue'
import Tips from './Tips.vue'
import Checkbox from './Checkbox.vue'
import { useDesign } from '../../hooks/useDesign'

const props = defineProps({
  showTips: {
    type: Boolean,
    default: true,
  },
  showCheckbox: {
    type: Boolean,
    default: true,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['setShowLabel'])

const checked = ref(props?.showCheckbox)

function setShowLabel(newChecked: boolean) {
  checked.value = !checked.value
  emit('setShowLabel', newChecked)
}

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('extend')
</script>
<script lang="ts">
export default {
  name: 'Tools',
}
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-extend';

.@{prefix-cls}-tools-all,
.@{prefix-cls}-tools-one {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 30px;
  right: 10px;
  .tips {
    margin-right: 5px;
  }
}
.@{prefix-cls}-tools-one {
  right: 20px;
}
</style>
