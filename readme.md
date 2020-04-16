# 将 js 文件用 babel 编译
```bash
npm run babel
```

# 用 webpack 将文件用 babel 转逸并打包在一起
```bash
npm run build
```

# 自定义 plugin 存放在 plugins 目录中


# @babel/polyfill 用法
babel 在 7.4.0 版本后不再使用 @babel/polyfill 的方式进行 
polyfill，而是改用 "core-js/stable" 和 "regenerator-runtime/runtime" 的方式。

7.4.0 版本以前用法：

corejs 的版本只能使用 2 版。

.babelrc:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11",
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "corejs": "2",
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

7.4.0 版本以后版本用法：

corejs@3 以后不再使用 @babel/polyfill 的方式进行 polyfill， 正确用法应该是：

.babelrc:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11",
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "corejs": "3",
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

main.js: 
在入口文件的头部引入 "core-js/stable"; "regenerator-runtime/runtime";

```javascript
import "core-js/stable";
import "regenerator-runtime/runtime";
```

因此需要在 npm 中安装：
```bash
npm install --save core-js@3
npm install --save regenerator-runtime
```