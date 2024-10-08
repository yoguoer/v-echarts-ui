<template>
  <el-form :model="data" v-bind="options.attr" :ref="setRef()">
    <!--如果传入 options.slot 则使用默认插槽,该插槽内容会将所有配置项内容覆盖 -->
    <template #default v-if="options.slot">
      <!--传入 slot 为字符串表示插槽为 自定义 template -->
      <slot v-if="isString(options.slot)" :name="options.slot"></slot>
      <!--传入 slot 为对象表示插槽为 JSON 配置 -->
      <BasicComponent v-if="isObject(options.slot)" :options="options.slot" />
    </template>
    <!--form 表单内置组件是一个二维数组排列-->
    <el-row v-for="(item, index) of items" :key="index" justify="unset" class="default-form">
      <el-col
        v-for="(formItem, findex) of item"
        :key="setKey(findex, formItem.attr?.prop)"
        :span="setSpan(item, formItem.span)"
        v-bind="formItem.colAttr">
        <el-form-item v-bind="formItem.attr">
          <BasicComponent
            :options="formItem.component"
            v-model="data[formItem.attr?.prop]"
            @click="
              triggerEvent(
                formItem.component.publicEvent,
                formItem.component.event?.submit,
                formItem.component.event?.reset,
              )
            "
            @change="($evnet: any) => changeHandler($evnet, formItem.attr?.prop as string)" />
          <!--如果传入 el-form-item formItem.slot 则使用默认插槽 -->
          <template #default v-if="formItem.slot">
            <!--传入 slot 为对象表示插槽为 JSON 配置 -->
            <BasicComponent
              v-if="isObject(formItem.slot)"
              :options="formItem.slot"
              :data="data[formItem.attr.prop]" />
            <!--传入 slot 为字符串表示插槽为 自定义 template -->
            <slot
              v-if="isString(formItem.slot)"
              :name="formItem.slot"
              :items="formItem"
              :data="data[formItem.attr.prop]"></slot>
          </template>

          <!--如果传入 options.labelSlot 则使用 label 插槽 -->
          <template #label v-if="formItem.labelSlot">
            <!--传入 slot 为对象表示插槽为 JSON 配置 -->
            <BasicComponent
              v-if="isObject(formItem.labelSlot)"
              :options="formItem.labelSlot"
              :data="data[formItem.attr.prop]" />
            <!--传入 slot 为字符串表示插槽为 自定义 template -->
            <slot
              v-if="isString(formItem.labelSlot)"
              :name="formItem.labelSlot"
              :items="formItem"
              :data="data[formItem.attr.prop]"></slot>
          </template>

          <!--如果传入 options.errorSlot 则使用 error 插槽 -->
          <template #error v-if="formItem.errorSlot">
            <!--传入 slot 为对象表示插槽为 JSON 配置 -->
            <BasicComponent
              v-if="isObject(formItem.errorSlot)"
              :options="formItem.errorSlot"
              :data="data[formItem.attr.prop]" />
            <!--传入 slot 为字符串表示插槽为 自定义 template -->
            <slot
              v-if="isString(formItem.errorSlot)"
              :name="formItem.errorSlot"
              :items="formItem"
              :data="data[formItem.attr.prop]"></slot>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts" name="Search">
import { ref, unref, defineProps, defineEmits, computed, reactive } from 'vue'
import { FormType, FormItemType } from '../type'
import BasicComponent from '../../BasicComponent'
import { isString, isObject, isUnDef } from '../../utils/is'

const emit = defineEmits(['changeAfter'])

const props = defineProps<{
  // 表单数据
  options: FormType
}>()

let items = computed(() => props.options.items)
// Form 表单数据
const data = reactive(props.options.mode)

// 表单Ref
const formRef = ref()
// 设置表单的引用，如果配置参数没传入，则使用默认的表单引用，否则使用配置参数的引用
const setRef = function () {
  return isUnDef(props.options.ref) ? formRef : props.options.ref
}

/**
 * 子组件触发的公共事件
 * @param val { string } 公共事件字符串
 * @return function 公共事件
 * @author
 */
const triggerEvent = (val: string | undefined, submit: Function, reset: Function) => {
  if (val === 'submit' || submit) {
    ;(function () {
      // 表单验证
      setRef().value.validate((valid: boolean) => {
        if (!valid) return
        submit && submit(unref(data))
        if (val === 'reset') {
          setRef().value.resetFields()
        }
      })
    })()
  } else if (val === 'reset' || reset) {
    // 重置表单
    ;(function () {
      reset && reset()
      setRef().value.resetFields()
    })()
  }
}

/**
 * 计算表单项的span
 * @param formItem { Array<FormItemType> } 表单一行的表单项数组
 * @param val { string | number } 表单项指定的 span 值
 * @return number span的值
 * @author
 */
const setSpan = (formItem: Array<FormItemType>, val: string | number | undefined) => {
  let spanValue = 24
  let spanIndex = 0
  formItem.forEach(item => {
    if (item.hasOwnProperty('span')) {
      let value = isString(item.span) ? parseInt(item.span) : (item.span as number)
      spanValue = spanValue - value
      spanIndex++
    }
  })
  if (val !== undefined) {
    return val
  } else {
    return spanValue / (formItem.length - spanIndex)
  }
}

/**
 * 设置表单项或表单项子组件的 key 值
 * @param index { number } 表单项或表单项子组件的在数组的位置
 * @param prop { string } 表单项的 prop 值或 子组件的 label 值
 * @return string 对应表单项或表单项子组件的 key 值
 * @author
 */
const setKey = (index: number, prop: string | undefined) => {
  if (isUnDef(prop)) {
    return index
  } else {
    return index + prop
  }
}

/**
 * change 事件后置处理器
 * @param parmas
 */
const changeHandler = function (parmas: any, prop: string) {
  emit('changeAfter', {
    prop: prop,
    value: parmas,
  })
}
</script>
<script lang="ts">
export default {
  name: 'Search',
}
</script>
<style scoped lang="less">
.default-form {
  width: 100%;
  white-space: nowrap;
}
</style>
