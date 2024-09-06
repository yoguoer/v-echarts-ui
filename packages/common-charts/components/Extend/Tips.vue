<template>
  <div class="tips-container">
    <el-popover
      v-bind="$attrs"
      v-on="$attrs"
      placement="top-start"
      trigger="hover"
      :title="title || '计算公式'">
      <template #reference>
        <el-icon :size="20">
          <Opportunity></Opportunity>
        </el-icon>
      </template>
      <div class="content-container">
        <el-divider class="divider" />
        <div class="content">{{ tips }}</div>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Opportunity } from '@element-plus/icons-vue'

// 定义props
const props = defineProps({
  tips: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
})
</script>
<script lang="ts">
export default {
  name: 'Tips',
}
</script>

<style lang="less" scoped>
.tips-container {
  width: 16px;
  margin: 5px 0px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
}

.content-container {
  padding: 0 10px 10px 10px;
  .divider {
    margin: 5px 0;
  }
  .content {
    white-space: pre-wrap;
    text-overflow: ellipsis;
  }
}
</style>
