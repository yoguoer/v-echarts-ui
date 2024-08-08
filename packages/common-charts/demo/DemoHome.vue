<template>
  <div class="demo-home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <div v-for="item in menuList" :index="item.name" :key="item.name">
        <el-sub-menu v-if="item.children && item.children.length > 0">
          <template #title>{{ item.title }}</template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.name"
            :index="child.name"
          >
            {{ child.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="item.name" :index="item.name">{{
          item.title
        }}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup title="Menu">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menuList = reactive([
  { title: "测试", name: "testDemo" },
  {
    title: "基础图表",
    name: "common-charts",
    children: [
      { title: "测试", name: "testDemo" },
      { title: "Bar柱状图", name: "BarDemo" },
      { title: "Line条形图", name: "LineDemo" },
      { title: "Pie饼图", name: "PieDemo" },
      { title: "Gauge仪表盘", name: "GaugeDemo" },
    ],
  },
]);

const activeIndex = ref("测试");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key:", key, "keyPath:", keyPath);
  router.push({ name: key });
};
</script>
<style lang="less">
.demo-home {
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
</style>
