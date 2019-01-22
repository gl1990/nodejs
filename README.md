[Cloud Studio](https://studio.dev.tencent.com) · [插件市场](https://studio.dev.tencent.com/plugins) · [插件开发文档](https://studio.dev.tencent.com/plugins-docs)

>**以下内容均为示例内容，请在发布之前替换为您自己的插件使用文档。**
**README 中的图片请使用外链，项目内图片会导致发布后其他用户无法看到。**

# Cloud Studio 插件
<!-- 以下内容可以替换为插件的介绍 -->
[Cloud Studio](https://studio.dev.tencent.com) 是基于浏览器的集成式开发环境（IDE），支持一键环境切换、多人协同编辑、在线预览等等，可以帮助开发者完成各种应用的开发、编译与部署工作。同时 Cloud Studio 开放了丰富的插件扩展系统，得益于 Monaco-Editor 强大的扩展性，用户可以自行开发插件来提升使用体验。

## Features
<!-- 以下内容可以替换为插件的特性 -->
这个示例插件可以实现一个最简单的功能：在底部状态栏显示一个按钮，点击这个按钮可以在右上角弹出「Hello CloudStudio!」通知。

![demo](https://dn-coding-net-production-pp.codehub.cn/5bf571a6-cc2a-49f2-abf4-34dd64283f28.gif)

## Configuration
<!-- 以下内容可以替换为插件的安装、配置 -->
要开发一款 Cloud Studio 插件，你只需要在 [Cloud Studio 工作空间](https://studio.dev.tencent.com/dashboard/workspace)中创建一个插件就可以了。

![](https://dn-coding-net-production-pp.codehub.cn/635e7c90-1a3a-485b-a31e-ff7379de0a02.jpg)

### 实时调试开发
你可以在插件的工作空间内开启开发模式，实时调试预览插件。进入工作空间后，先打开底部的终端安装依赖：
```sh
yarn
```
安装完依赖，开启开发模式：
```sh
yarn start
```
![yarn](https://dn-coding-net-production-pp.codehub.cn/218d07c6-86a7-43f6-9863-6dadad922bac.jpg)

此时，在右侧的插件开发面板中点击「加载插件」，就可以预览到插件效果了。

![panel](https://dn-coding-net-production-pp.codehub.cn/21d9f2a6-4190-4530-95e5-549b57906ee6.jpg)

### 推送到远程仓库
如果你的插件在实时调试时各项功能正常，就可以发布到插件市场了，不过在此之前，**请一定要将你的代码 push 到远端仓库**。这是因为，当你发布插件的时候，我们会根据这个插件对应的仓库（一个腾讯云开发者平台项目）的最新代码来构建你的插件。删除该项目或代码未推送过来会导致构建失败或异常，影响您的发布。

### 发布
最后，您就可以前往[我开发的插件 -> 设置](https://studio.dev.tencent.com/dashboard/plugin/developedbyme/setting)页面来发布您的插件了。一般发布之后我们会在 3-5 个工作日完成审核，通过审核的插件就可以展示在[插件市场](https://studio.dev.tencent.com/plugins)供其他用户安装使用了。

## FAQ
<!-- 以下内容可以替换为插件的常见问题解答 -->

## ChangeLog
<!-- 以下内容可以替换为插件的更新日志 -->

## Reference
<!-- 以下内容可以替换为插件的相关参考内容 -->
详细的插件开发细节请参考 [Cloud Studio 插件开发文档](https://studio.dev.tencent.com/plugins-docs)。

**示例插件**
- [material-ui主题](https://coding.net/u/codingide/p/CloudStudio-Plugin-Material/git)
- [代码片段](https://coding.net/u/codingide/p/CloudStudio-Plugin-Snippets/git)
- [Git diff 示例](https://coding.net/u/codingide/p/CloudStudio-Plugin-Diff/git)
- [Atom Power Mode](https://coding.net/u/codingide/p/CloudStudio-Power-Mode/git)
