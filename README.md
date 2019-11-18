# 腾讯课堂
#### [版本变更历史](https://git.code.oa.com/ke_proj/weapp-ke/blob/master/CHANGELOG.md)

## todos

- 字体上云开发
- config （配置机构小程序、题库等）

> * **微信基础库最低版本要求： 2.2.5及以上**
> * **开发者工具版本需要最新（1.02.1901220）及以上**
> * **node版本8.6.0以上**

## 项目初始化
### 1. 安装及运行

```bash
# 初始化依赖
npm run init

# 运行
npm run dev
```

### 2.测试环境调试
```bash
# 为小程序添加nohost插件
npm run nohost

# 移除小程序nohost插件
npm run rmnohost
```

#### 切换环境

环境的变量的最终值可在 miniprogram 中的 `config.js` 中得到，其他需要使用的请导入该文件。

```bash
# 开发环境为dev，线上环境为pro
# 切换开发环境会自动添加上面的nohost
# 切换线上环境会自动删除nohost
gulp config --env="xxx"
```

#### 切换小程序
切换小程序的时候，会默认把 config 目录中的对应的 json 文件输出到 `app.json`
如 `ke.json` 用于课堂小程序的 `app.json`。

```bash
# 以下特性暂未支持
# name 取值
# ke 表示课堂小程序
# agency 表示普通版本机构小程序
# agencytiku 表示题库版机构小程序
gulp config --name="xxx"
```

### 3.提交规范(依赖node 8.6.0以上)
```
标题行: 必填, 描述主要修改类型和内容, 格式为type(scope): subject

主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等

页脚注释: 放 Breaking Changes 或 Closed Issues

# 类型

type: commit 的类型

    feat: 新特性

    fix: 修改问题

    refactor: 代码重构

    docs: 文档修改

    style: 代码格式修改, 注意不是 css 修改

    test: 测试用例修改

    chore: 其他修改, 比如构建流程, 依赖管理.

scope: commit 影响的范围, 比如: route, component, utils, build…

subject: commit 的概述, 建议符合 50/72 formatting

body: commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting

footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

```
**可以使用npm run commit 使用命令行提示提交**

### 4.发布规范
**通过ide发布的小程序版本必须与package.json版本保持一致, 如1.2.0**
每次发布前，可以通过
```shell
npm run release
```
自动产生changelog，并递增版本号。

支持脚本自动发布到小程序后台：

1. 将官方的cli命令添加到环境变量中；
    * macOS: <安装路径>/Contents/MacOS/cli(/Applications/wechatwebdevtools.app/Contents/MacOS/cli)
    * Windows: <安装路径>/cli.bat
2. 通过以下命令构建小程序npm并上传本地小程序代码包到微信后台

```shell
npm run upload-weapp
```
* 脚本会自动读取package.json里面的版本信息，也可以自行输入
* 脚本会自动读取最近5此git提交的信息，也可以自行输入

### 5，其他
#### player相关tdw上报点

|                           | action                   | ver1  | ver2 | ver3   |
| ------------------------- | ------------------------ | ----- | ---- | ------ |
| tcplayer点播拉接口失败    | tcplayer getinfo fail    | video | vid  |        |
| tcplayer点播拉接口成功    | tcplayer getinfo success | video | vid  |        |
| tcplayer点播播放失败      | tcplayer play fail       | video | vid  |        |
| tcplayer点播播放成功      | tcplayer play success    | video | vid  |        |
| tcplayer点播video组件异常 | tcplayer video error     | video | vid  | errMsg |
| tcplayer点播首帧时长      | tcplayer first frame     | video | vid  | time   |
| tcplayer直播拉接口失败    | tcplayer getinfo fail    | live  | sid  |        |
| tcplayer直播拉接口成功    | tcplayer getinfo success | live  | sid  |        |
| tcplayer直播播放失败      | tcplayer play fail       | live  | sid  |        |
| tcplayer直播播放成功      | tcplayer play success    | live  | sid  |        |
| tcplayer直播video组件异常 | tcplayer video error     | live  | sid  | errMsg |
| tcplayer直播首帧时长      | tcplayer first frame     | live  | sid  | time   |

-----
#### VS Code 插件

* [minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode) 用于支持 wxml 代码高亮与代码片段
* [vscode weapp api](https://marketplace.visualstudio.com/items?itemName=coderfee.vscode-weapp-api) 用于支持 wx api 代码片段
* [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) 用于隐藏 wxss 文件，只暴露 CSS 文件
