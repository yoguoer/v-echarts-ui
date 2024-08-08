<template>
  <div class="container">
    <Tips v-if="showTips && tips" class="tips" :tips="tips" />
    <div :id="id" :class="className" :style="{ height: height, width: width }" />
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import common from "../../mixins/common.ts";
import { pieOptions } from "../../options/pie.ts";
import Tips from "../../Extend/Tips.vue";

export default {
  name: 'Pie',
  mixins: [common],
  props: {
    id: {
      type: String,
      default: "pieChart",
      require: true,
    },
  },
  components: {
    Tips,
  },
  computed: {
    charOptions() {
      return pieOptions(this);
    },
  },
  beforeCreate() {
    echarts.use([PieChart]);
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .tips {
    z-index: 1000000000;
    position: absolute;
    right: 5px;
    top: 0;
  }
}
</style>
