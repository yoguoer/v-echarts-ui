<template>
  <vSearch :options="options" />
</template>

<script setup lang="ts" name="SearchDemo">
import { vSearch } from 'v-echarts-ui';
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';
interface RuleForm {
  username: string;
  star: boolean;
  github: string;
}

// 响应数据
let data = reactive<RuleForm>({
  username: 'v-echarts-ui',
  star: true,
  github: 'https://github.com/yoguoer',
});

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input  name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  star: [
    {
      required: true,
      message: 'Please input github',
      trigger: 'change',
    },
  ],
});
// from 表单配置项
const options = {
  mode: data,
  attr: {
    'label-width': 'auto',
    rules: rules,
  },
  items: [
    [
      {
        attr: {
          prop: 'username',
          label: '项目名称',
        },
        component: {
          comp: 'el-input',
        },
      },
    ],
    [
      {
        attr: {
          prop: 'github',
          label: 'GitHub',
        },
        component: {
          comp: 'el-input',
        },
      },
      {
        span: 2,
        attr: {
          prop: 'star',
          label: '关注',
        },
        component: {
          comp: 'el-switch',
        },
      },
    ],
  ],
};
</script>

<style scoped lang="less"></style>
