<template>
  <el-checkbox v-model="checked" @change="showLabel"></el-checkbox>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['setShowLabel'])

const props = defineProps({
  initChecked: {
    type: Boolean,
    default: true,
  },
})

const checked = ref(props.initChecked)
const showLabel = () => {
  emit('setShowLabel', checked.value)
}
</script>
<script lang="ts">
export default {
  name: 'Checkbox',
}
</script>
