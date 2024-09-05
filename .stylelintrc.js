// .stylelintrc.js  
module.exports = {  
    // 继承的预设，这些预设包含了规则集插件  
    // 这些预设将按照数组中的顺序被合并，后者会覆盖前者的规则  
    extends: [  
        // 代码风格规则，包含了一套代码风格的最佳实践  
        'stylelint-stylistic/config',  
        // 针对 LESS 文件的标准配置  
        'stylelint-config-standard-less',  
        // 适用于 Vue 项目的 LESS 文件推荐配置  
        'stylelint-config-recommended-vue/less',  
        // 强制 CSS 属性的书写顺序  
        'stylelint-config-recess-order',  
        // Stylelint 的推荐配置  
        'stylelint-config-recommended'  
    ],  
    // 自定义规则集，可以覆盖继承自预设的规则  
    rules: {  
        // 自定义规则：限制每行的最大长度  
        // 设置为 null 表示禁用该规则  
        // 'stylistic/max-line-length': null,  
        // 设置为 100 表示每行代码的最大长度为 100 个字符  
        'stylistic/max-line-length': 100,  
    },  
    // 插件列表，用于扩展 Stylelint 的功能  
    // 注意：确保你已经安装了这些插件  
    plugins: ["stylelint-processor-styled-components"],  
    // 处理器列表，用于处理特定的 CSS-in-JS 解决方案  
    // 这里配置为处理 styled-components  
    processors: ["stylelint-processor-styled-components"]  
};