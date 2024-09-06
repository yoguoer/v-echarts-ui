# 筛选项配置方法

## 自定义筛选组件

​	提供了 `vBasicComponent`  组件，支持渲染你所能想到的所有类型的组件。在这里，我们主要是用来提供一个口子，让你能够更灵活地去实现自己想要的组合，你能够高度自定义你的搜索表单，包括表单项的类型、布局、事件处理等。

​	例如，我们可以用它来引入我们的 vSearch 组件（或者你自己封装的其它高级搜索组件），实现根据搜索条件去加载不同的图表。

### 使用示例

<vEcharts-demo
  demo-height="300px"
  source-code="common-charts:::BasicComponent/Basic-demo"
/>

### options 参数

| 参数名    | 介绍           | 类型                      |
| --------- | -------------- | ------------------------- |
| comp      | 组件标签名称   | string \| Component       |
| className | 组件类名称     | string                    |
| data      | 传入组件数据   | any                       |
| key       | 组件 key       | string                    |
| attr      | 组件属性       | Recordable                |
| event     | 组件事件       | Recordable                |
| content   | 组件内容       | `CompContentType`         |
| children  | 组件子节点 dom | ` Array<CompType> ` \| [] |
| ref       | 组件 ref 引用  | `Ref<T>`                  |
| slotScope | 作用域插槽参数 | any                       |

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
>   comp: string | Component; // 组件标签名称
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

​	提供了 `vSearch` 组件，其内置了  `vBasicComponent`  组件，能够支持 `elementPlus` 中的各种组件，通过一个二维数组，能够渲染出一个含多种不同参数的表单，帮助你进行多参数筛选，根据条件渲染出不同的图表。

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
| ref    |                  | `Ref<T>`                     |
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
| changeAfter | `val: { props:'', value: '' }` | 更换搜索条件时触发，返回发生变动的对象，包含字段名称和变动值 |

