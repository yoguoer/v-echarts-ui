<template>
  <div class="container">
    <Tips v-if="showTips && tips" class="tips" :tips="tips" />
    <Checkbox v-if="showCheckbox" class="checkbox" :initChecked="checked" @setShowLabel="setShowLabel" />
    <div :id="id" :class="className" :style="{ height: height, width: width }" />
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
// import common from '../../mixins/common.ts'
import { lineOptions } from '../../options/line.ts'
import Tips from '../../Extend/Tips.vue'
import Checkbox from '../../Extend/Checkbox.vue'
import { setShowLabel } from "../../options/utils"

import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent
} from 'echarts/components'

export default {
  name: 'Line',
  components: {
    Tips,
    Checkbox
  },
//   mixins: [common],
  props: {
    id: {
      type: String,
      default: 'lineChart',
      require: true
    }
  },
  data() {
    return {
      checked: true
    }
  },
  methods: {
    setShowLabel(checked) {
      this.checked = checked
      setShowLabel(this.charOptions,this.checked)
      this.setOption()
    }
  },
  computed: {
    charOptions() {
      return lineOptions(this)
    }
  },
  beforeCreate() {
    echarts.use([
      TitleComponent,
      ToolboxComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      MarkPointComponent,
      MarkLineComponent,
      LineChart
    ])
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;

  .tips {
    z-index: 1000000000;
    position: absolute;
    right: 14px;
    top: 6px;
    width: 15px;
  }

  .checkbox {
    z-index: 1000000000;
    position: absolute;
    right: -5px;
    top: 0;
  }
}
</style>
