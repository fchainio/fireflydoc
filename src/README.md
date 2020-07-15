---
home: true
actionText: 开始 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2020-present
---

## 介绍

泉链v2.x开放了第三方DAPP接口，让开发者可以开发自己的DAPP，为用户提供更多的选择和功能。

泉链v3.x支持比特币、以太（含ERC20）、恒星三种生态，除了支持恒星生成的DApp外，也支持基于web3.js的以太DApp。

### 应用开发流程
* DAPP为标准的webapp工程，开发者可以选择自己熟悉的相关技术栈构建项目
* 不需要引用其它的任何代码
* 在DAPP初始加载整个界面后，泉链运行环境会在当前界面注入SDK代码，当前DAPP需要监听window.qlchain对象是否存在，当window.qlchain对象存在时，即可从中获取相应的地址和接口等
* 开发者打开泉链运行环境APP中的『轻应用』，点击右上角的图标，可以添加自己本地的地址，在泉链运行环境中进行测试

<locales />