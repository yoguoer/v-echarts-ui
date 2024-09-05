<template>
  <div class="basic-demo">
    <vBasicComponent :options="element"></vBasicComponent>
  </div>
</template>

<script setup lang="ts" name="BasicDemo">
import { vBasicComponent, vSearch } from 'v-echarts-ui';
// 响应数据
let data = {
  username: 'vivien',
  hobby: 'sleep',
  place: 'GuangZhou',
};

const formOptions = {
  mode: data,
  attr: {
    'label-width': '30px',
  },
  items: [
    [
      {
        attr: {
          prop: 'username',
          label: '名字',
        },
        component: {
          comp: 'el-input',
        },
      },
      {
        attr: {
          prop: 'hobby',
        },
        component: {
          comp: 'el-radio-group',
          children: [
            {
              comp: 'el-radio',
              attr: {
                value: 'sleep',
                label: '睡觉',
              },
            },
            {
              comp: 'el-radio',
              attr: {
                value: 'work',
                label: '上班',
              },
            },
          ],
        },
      },
      {
        attr: {
          prop: 'place',
          label: '地址',
        },
        component: {
          comp: 'el-select',
          attr: {
            placeholder: '项目地址',
          },
          children: [
            {
              comp: 'el-option',
              attr: {
                label: '惠州',
                value: 'huizhou',
              },
            },
            {
              comp: 'el-option',
              attr: {
                label: '广州',
                value: 'guangzhou',
              },
            },
          ],
        },
      },
    ],
  ],
};

const element = {
  comp: vSearch, // 注意直接传入自定义组件对象
  attr: {
    style: {
      width: '100%',
      height: '100%',
    },
    options: formOptions,
  },
};
</script>

<style scoped lang="less"></style>
