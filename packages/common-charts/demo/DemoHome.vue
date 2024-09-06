<template>
  <div class="demo-home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item v-for="item in withoutChildren" :key="item.name" :index="item.name">
        {{ item.title }}
      </el-menu-item>
      <el-sub-menu v-for="item in withChildren" :index="item.name" :key="item.name">
        <template #title>{{ item.title }}</template>
        <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name">
          {{ child.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup title="Menu">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const withChildren = computed(() =>
  menuList.filter(item => item.children && item.children.length > 0),
)
const withoutChildren = computed(() =>
  menuList.filter(item => !item.children || item.children.length === 0),
)

const menuList = reactive([
  { title: '测试', name: 'testDemo' },
  {
    title: '搜索',
    name: 'search',
    children: [
      { title: '基础', name: 'BasicDemo' },
      { title: '表单', name: 'SearchDemo' },
    ],
  },
  {
    title: '基础图表',
    name: 'common-charts',
    children: [
      { title: 'Bar条形图', name: 'BarDemo' },
      { title: 'Bar条形图-堆叠', name: 'BarStackDemo' },
      { title: 'Line折线图', name: 'LineDemo' },
      { title: 'Pie饼图', name: 'PieDemo' },
      { title: 'Gauge仪表盘', name: 'GaugeDemo' },
      { title: 'Gauge仪表盘custom', name: 'GaugeCustomDemo' },
      { title: 'BarSearchDemo', name: 'BarSearchDemo' },
      { title: 'LineSearchDemo', name: 'LineSearchDemo' },
    ],
  },
])

const activeIndex = ref('测试')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log('key:', key, 'keyPath:', keyPath)
  activeIndex.value = key
  router.push({ name: key })
}
</script>
<style lang="less">
.demo-home {
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
</style>
