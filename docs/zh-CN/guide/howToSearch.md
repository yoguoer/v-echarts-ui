# 使用筛选项

​	在数据可视化和图表应用中，筛选项是用户交互的重要部分，允许用户根据特定条件过滤数据，从而生成更加精准和相关的图表。`v-echarts-ui` 组件库提供了灵活的筛选项组件，包括自定义筛选组件和默认筛选配置，以满足不同场景下的需求。

## 自定义筛选组件

​	提供了 `vBasicComponent`  组件，它是一个高度灵活的组件，支持渲染你所能想到的所有类型的表单项，让用户能够根据自己的需求构建复杂的搜索表单。通过此组件，你可以定义表单项的类型、布局、事件处理等，实现高度自定义的搜索功能。

​	例如，我们可以用它来引入我们的 vSearch 组件（或者你自己封装的其它高级搜索组件），实现根据搜索条件去加载不同的图表。

### 使用示例

你可以通过传递 `options` 参数来配置 `vBasicComponent` 组件，包括组件标签名称或组件对象、类名、数据、属性、事件等。

<vEcharts-demo
  demo-height="300px"
  source-code="common-charts:::BasicComponent/Basic-demo"
/>

### options 参数

| 参数名    | 介绍                   | 类型                      |
| --------- | ---------------------- | ------------------------- |
| comp      | 组件标签名称或组件对象 | string \| Component       |
| className | 组件类名称             | string                    |
| data      | 传入组件数据           | any                       |
| key       | 组件 key               | string                    |
| attr      | 组件属性               | Recordable                |
| event     | 组件事件               | Recordable                |
| content   | 组件内容               | `CompContentType`         |
| children  | 组件子节点 dom         | ` Array<CompType> ` \| [] |
| ref       | 组件 ref 引用          | `Ref<T>`                  |
| slotScope | 作用域插槽参数         | any                       |

> 其中，
>
> - CompContentType：
>
> ```typescript
> interface CompContentType {
>   text: any;
>   key?: string;
>   attr?: Recordable;
>   event?: Recordable;
>   ref?: Ref<T>;
> }
> ```
>
> - CompType：
>
> ```typescript
> declare interface CompType {
>   comp: string | Component; // 组件标签名称或组件对象
>   className?: string; // 组件类名称
>   data?: any; // 传入组件数据
>   key?: string; // 组件 key
>   attr?: Recordable; // 组件属性
>   event?: Recordable; // 组件事件
>   content?: CompContentType; // 组件内容
>   children?: Array<CompType> | []; // 组件子节点 dom
>   ref?: Ref<T>; // 组件 ref 引用
>   slotScope?: any; // 作用域插槽参数
> }
> ```

## 使用默认筛选配置 

​	提供了 `vSearch` 组件，它是一个内置了 `vBasicComponent` 功能的组件，简化了多参数筛选表单的构建过程。通过配置 `items` 二维数组，你可以快速渲染出一个包含多种参数的表单，用于数据筛选。

### 使用示例

<vEcharts-demo
  demo-height="300px"
  source-code="common-charts:::Search/Search-demo"
/>

### options 参数

| 参数名 | 介绍             | 类型                         |
| ------ | ---------------- | ---------------------------- |
| mode   | 响应数据对象     | Recordable                   |
| attr   | el-form 属性对象 | Recordable                   |
| ref    | 组件 ref 引用    | `Ref<T>`                     |
| items  | 表单项数组       | `Array<Array<FormItemType>>` |
| slot   | 自定义表单插槽   | string \| object             |

> 其中，
>
> - FormItemType：
>
> ```typescript
> export interface FormItemType {
>   // 表单项占据尺寸
>   span?: number;
>   colAttr?: Recordable;
>   // 表单项 el-form-item 属性对象
>   attr?: Recordable;
>   // 表单项所要渲染的组件
>   component: ComponentType;
>   slot?: string | object;//表单的内容。
>   labelSlot?: string | object;//	标签位置显示的内容
>   errorSlot?: string | object;//	验证错误信息的显示内容
> }
> ```

### 事件

| 事件名      | 参数                           | 作用                                                         |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| changeAfter | `val: { props:'', value: '' }` | 当搜索条件发生变化时触发，返回包含变动字段名称和变动值的对象 |

