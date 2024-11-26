# 文件命名规范

## 命名规则

一般用小写英文 、 数字、 `- `这些字符，命名最好是通用英文，尽量不用或者少用拼音。

## 项目命名

全部采用小写方式， 以中划线分隔。

例：`element-plus`,`vue-router`, `ant-design`, `react-router`.

## 目录命名

全部采用小写方式。有复数结构时，要采用复数命名法。
例：`docs`,`components`, `styles`, `images`.

- 常用目录结构

根据实际项目需求增减对应的目录

```sh
.
├── bin                                 #执行脚本
├── build                               #构建相关
├── public                              #静态资源
├── src                                 #核心源码
│   ├── api                             #请求接口
│   ├── assets                          #图片字体等资源
│   ├── components                      #通用组件
│   ├── directives                      #全局指令
│   ├── docs                            #组件使用说明文档
│   ├── layout                          #页面布局
│   ├── plugins                         #插件
│   ├── router                          #路由
│   ├── store                           #数据仓库
│   ├── utils                           #工具函数
│   ├── views                           #业务页面
│   ├── App.vue                         #入口页面
│   ├── main.js                         #入口初始化
│   ├── permission.js                   #权限管理
│   └── settings.js                     #系统配置
├── .editorconfig                       #编码格式
├── .env.development                    #开发环境配置
├── .env.production                     #生产环境配置
├── .env.staging                        #测试环境配置
├── .eslintignore                       #忽略语法检查
├── .eslintrc.js                        #eslint配置项
├── .gitignore                          #git忽略项
├── babel.config.js                     #babel.config.js
├── package.json                        #package.json
├── README.md                           #项目简介
└── vue.config.js                       #vue.config.js
```

## JS 文件命名

全部采用小写方式，以中划线分隔，或者用小驼峰。

例：`permission.js`,`scroll-to.js`,`errorCode.js`.

## CSS, SCSS, LESS 等样式文件命名

全部采用小写方式， 以中划线分隔。

例：`sidebar.scss`, `element-ui.scss`,`element-variables.scss`.

## HTML 文件命名

全部采用小写方式， 以中划线分隔。

例：`index.html`.

## 图片/视频/声音文件

全部采用小写方式， 以中划线分隔。

例：`login-background.jpg`.

## Components 组件

所有的 `Component` 文件都是以大写开头 (`PascalCase`)，这也是官方所推荐的。但除了 `index.vue`。

例：`@/components/Breadcrumb/index.vue`,`@/views/components/Button.vue`.

## Views 界面

在 views 文件下，代表路由的.vue 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例：`@/views/sale/pub-customers/index.vue`,`@/views/sale/customers/index.vue`

**使用横线连接 (kebab-case)来命名 views 主要是出于以下几个考虑。**

- 横线连接 (kebab-case) 也是 Vue 官方推荐的命名规范之一
- `views` 下的`.vue` 文件代表的是一个路由，所以它需要和 `component` 进行区分(`component` 都是大写开头)
- 页面的 `url` 也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的`view`应该要保持统一
- 没有大小写敏感问题
