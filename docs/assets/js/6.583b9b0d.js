(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("下面的连接，需要在钱包中打开。\nURL为https://t.cn/Re3xw6q\n添加方法：打开萤火钱包APP中的『探索』，点击右上角的图标，再次点击加号，输入名称，添加上述地址即可。返回『探索』页面，点击打开。\n源码见"),e("a",{attrs:{href:"https://github.com/fchainio/firefly-examples/tree/master/dapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("页面在萤火钱包中打开后，萤火钱包会注入FFW对象，可以使用window.FFW访问。可以根据此判断网页是否是在萤火内开启。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v('萤火钱包APP默认关闭了开发者模式，如果要开启，请打开"我的"-"设置"-"关于"，多次点击萤火图标，即可开启开发者模式')]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v('打开"萤火钱包APP"，打开"探索"页，在右上角打开"+"号按钮，填写名称和应用访问地址，即可在"自定义应用"栏看到添加的应用，可以点击图标打开运行')]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("返回当前萤火钱包的版本信息，类型为字符串。如当前版本为 '2.1.8'。")]),t._v(" "),t._m(6),e("p",[t._v("返回结果")]),t._v(" "),t._m(7),t._m(8),t._v(" "),e("p",[t._v("返回当前钱包所在设备的操作系统信息，类型为字符串，当前返回值为android或者ios。")]),t._v(" "),t._m(9),e("p",[t._v("返回结果")]),t._v(" "),t._m(10),t._m(11),t._v(" "),e("p",[t._v("返回当前钱包所在的设备的UUID进行SHA256运算后的数据，类型为字符串。")]),t._v(" "),t._m(12),e("p",[t._v("返回结果")]),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("返回当前钱包使用的语言选项，类型为字符串。")]),t._v(" "),t._m(15),e("p",[t._v("返回结果")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("返回当前用户的地址，类型为字符串，如GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65")]),t._v(" "),t._m(18),e("p",[t._v("返回结果")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),e("p",[t._v("返回结果")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),e("p",[t._v("关于"),e("code",[t._v("code")]),t._v("，"),e("code",[t._v("issuer")]),t._v("的概念，参见"),e("a",{attrs:{href:"https://www.stellar.org/developers/guides/concepts/assets.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("stellar 官方文档"),e("OutboundLink")],1),t._v("，"),e("a",{attrs:{href:"https://docs.stellarcn.org/developers/guides/concepts/assets.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),e("OutboundLink")],1),t._v("。\n关于 "),e("code",[t._v("memo_type")]),t._v("和"),e("code",[t._v("memo")]),t._v("的概念，参见"),e("a",{attrs:{href:"https://www.stellar.org/developers/guides/concepts/transactions.html#memo",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("，稍后会以汉语进行说明。\n"),e("code",[t._v("callback")]),t._v(" 是payment执行后的回调函数，可以是函数名称或者是一个函数。\n在pay执行完毕后，"),e("code",[t._v("callback")]),t._v("将会接收一个对象，内容如下")]),t._v(" "),t._m(30),e("p",[t._v("代码示例")]),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),e("p",[t._v("WIP...")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),e("p",[t._v("代码示例")]),t._v(" "),t._m(37),e("p",[t._v("返回结果")]),t._v(" "),t._m(38),t._m(39),t._v(" "),e("p",[t._v("WIP...")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),e("p",[t._v("代码示例")]),t._v(" "),t._m(42),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),e("p",[t._v("代码示例")]),t._v(" "),t._m(54),t._m(55),t._v(" "),e("p",[e("code",[t._v("share(options,callback)")]),t._v("\n使用此方法，可以调用系统的分享功能。分享实现见"),e("a",{attrs:{href:"https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)]),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._m(59),t._v(" "),t._m(60),e("p",[t._v("代码示例")]),t._v(" "),t._m(61)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"启动app开发者模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动app开发者模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动APP开发者模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用萤火钱包app调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用萤火钱包app调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用萤火钱包APP调试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用桌面设备调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用桌面设备调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用桌面设备调试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Firefly桌面版本与移动版本功能一致，调试更加方便。除一些移动设备特定功能不能使用，如分享，扫描以外，等其它API均可进行测试。\n使用方法：\n点击导航栏『探索』，在自定义应用点击添加按钮。输入名称与应用地址后保存。\n点击添加的DApp，会自动弹出"),s("code",[this._v("Chrome developer tools")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取钱包版本信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取钱包版本信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取钱包版本信息")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  window.FFW.version    \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'2.1.8'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取钱包os平台信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取钱包os平台信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取钱包OS平台信息")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.platform\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'android'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取当前设备的uuid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取当前设备的uuid","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取当前设备的UUID")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.uuid\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'01a0865f4c2687d90f70f32b01c1e258bfd7aa6c7ccc35339dfacd72f5018bb8'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取钱包的语言设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取钱包的语言设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取钱包的语言设置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.locale\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'zh_cn'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取用户地址（id）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取用户地址（id）","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取用户地址（ID）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.address\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("'GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"获取用户余额（balance）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取用户余额（balance）","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取用户余额（balance）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("返回当前用户的资产信息。"),s("code",[this._v("balances(callback)")]),this._v("\n恒星网络可以发行资产。因此用户可以拥有多种资产。使用此方法可以获取当前用户所有的资产信息。\n此方法从钱包指定的horizon获取余额（balance）信息并返回。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("参数说明")]),t._v(" "),e("li",[e("code",[t._v("callback")]),t._v("是balance执行后的回调函数。可以是函数名称或者是一个函数。")]),t._v(" "),e("li",[t._v("https://www.stellar.org/developers/horizon/reference/endpoints/accounts-single.html")]),t._v(" "),e("li",[t._v("在balance执行完毕后，"),e("code",[t._v("callback")]),t._v("将会接收一个对象，内容如下")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示查询成功，fail表示查询失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Array类型。内容为用户的资产状态信息。")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("代码示例")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.balances(function(response){\n        if(response.code === 'fail'){\n             console.log('error:' + response.message)  \n             alert('查询失败！'+response.message)\n        }else{\n             console.log('query for balances successfully')\n             $(\"#balances_data\").text(JSON.stringify(response.data))\n             alert('查询余额成功')\n        }\n});\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('[\n    {\n      "balance": "1.0000000",       //资产余额\n      "limit": "707382697076.8900000",  //资产可持有的上限。通常在向用户发送时使用。\n      "asset_type": "credit_alphanum4",   //资产类型，分别为credit_alphanum4和credit_alphanum12. \n      "asset_code": "XFF",        //资产代码\n      "asset_issuer": "GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF"   //资产发行方\n    },\n    {\n      "balance": "1.9999900",   //资产余额\n      "asset_type": "native"       //native指代本地资产，即XLM\n    }\n]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"支付功能（payment）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支付功能（payment）","aria-hidden":"true"}},[this._v("#")]),this._v(" 支付功能（payment）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("pay(data, callback)")]),this._v("\n使用该方法，可以提请用户进行指定支付。\n参数说明：\n"),s("code",[this._v("data")]),this._v("是一个JSON，需要包含以下内容")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    destination"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'接收方地址'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，必须填写")]),t._v("\n    code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'资产编码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，必须填写")]),t._v("\n    issuer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'资产发行方'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，在发送原生资产XLM时，可不填写。其它资产均需要填写。")]),t._v("\n    amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'资产发送数量'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number类型, 必须填写 ")]),t._v("\n    memo_type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注类型'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，选填，可取值：NONE TEXT HASH ID RETURN。 ")]),t._v("\n    memo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注内容'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，选填，当memo_type为NONE时，不需要填写，memo_type为其它值时，需要填写。")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示支付成功，fail表示支付失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'返回结果数据'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//object类型或null")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.pay({\n         destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', \n         code: 'XFF', \n         issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', \n         amount: 1, \n         memo_type: 'TEXT',  \n         memo: 'Hello,FFW'\n       }, function(response){\n           if(response.code === 'fail'){\n             console.log('error:' + response.message)  \n             alert('支付失败！'+response.message)\n           }else{\n             console.log('pay success')\n             alert('支付成功')\n             //后续代码\n           }\n});\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0806/162145_Uid5_109284.png",alt:"调用界面"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"路径支付功能（path-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径支付功能（path-payment","aria-hidden":"true"}},[this._v("#")]),this._v(" 路径支付功能（path payment)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用用户当前密钥签名（sign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用用户当前密钥签名（sign","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用用户当前密钥签名（sign)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("sign(data, callback)")]),t._v("\n使用该方法可以对数据进行签名，可以用于权限验证，比如应用可以在执行某些需要验证用户身份的操作之前，提供一些数据让用户进行签名鉴权。可以用来做用户登录。\n参数说明：\n"),e("code",[t._v("data")]),t._v("是一个JSON格式的字符串。data 的长度限制（WIP）\n"),e("code",[t._v("callback")]),t._v(" 是sign执行后的回调函数，可以是函数名称或者是一个函数。\n在"),e("code",[t._v("sign")]),t._v("执行完毕后，"),e("code",[t._v("callback")]),t._v("将会接收一个对象，内容如下")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示签名成功，fail表示签名失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'返回结果数据'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//base64编码字符串类型或null")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("let data = {name: 'firefly wallet dapp',desc:'the first hello in the world'}\ndata = JSON.stringify(data)\nconsole.log('待签名的数据:' +data)\nwindow.FFW.sign(data, function(response){\n    if(response.code === 'fail'){\n        console.log('error:' + response.message)  \n    }else{\n        console.log('success')\n        console.log('签名后的结果：'+response.data)\n    }\n})\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('待签名的数据:{"time":1533626528508,"address":"GACJFMOXTSE7QOL5HNYI2NIAQ4RDHZTGD6FNYK4P5THDVNWIKQDGOODU"}\n签名后的结果:4foYmY0Nrx1QPT5CfJEsJcYM0o40l4sHDo8aHJ0mHNq0ZY9Q7753FieHXBK3dJJ32+Lhw3UIJnzF2pplyo3LBg==\n\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"验证签名（validate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证签名（validate","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证签名（validate)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"提请用户信任资产（trust）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提请用户信任资产（trust）","aria-hidden":"true"}},[this._v("#")]),this._v(" 提请用户信任资产（trust）")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("trust(code, issuer, callback)")]),t._v("\n使用该方法，可以提请用户信任指定的资产。\n参数说明：\n"),e("code",[t._v("code")]),t._v("格式为字符串。内容为字母数字，即[a-z][A-Z][0-9]，长度限制为1-12字符。\n"),e("code",[t._v("issuer")]),t._v("格式为字符串，内容为地址。如"),e("code",[t._v("GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU")]),t._v("。\n"),e("code",[t._v("callback")]),t._v(" 是trust执行后的回调函数，可以是函数名称或者是一个函数。\n在"),e("code",[t._v("trust")]),t._v("执行完毕后，"),e("code",[t._v("callback")]),t._v("将会接收一个对象，内容如下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("var code = 'XFF';\nvar issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';\nwindow.FFW.trust(code,issuer,function(response){\n   if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n       alert('授信失败')\n    }else{\n       console.log('trust success')\n       alert('授信成功')\n    }\n})\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0808/003018_3Kcb_109284.png",alt:"调用界面"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请求用户签署xdr（signxdr）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求用户签署xdr（signxdr）","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求用户签署XDR（signXDR）")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("signXDR(data, message, callback)")]),t._v(" "),e("code",[t._v("signXDR")]),t._v("是一个底层方法。当Firefly提供的API无法直接满足需求时，可以使用此方法进行高级操作。\n使用前提：需要了解恒星底层SDK，能够手工构造Transaction封包。当构造并生成XDR格式的tranaction后，可以提请用户对Tx进行签名，签名后提交到网络。\n参数说明：\n"),e("code",[t._v("data")]),t._v(" 字符串，构造的XDR格式的transaction。\n"),e("s",[e("code",[t._v("message")]),t._v(" 字符串，用于告知用户此Tx的用途。")]),t._v(" "),e("code",[t._v("callback")]),t._v(" 是signXDR执行后的回调函数，可以是函数名称或者是一个函数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("signXDR")]),this._v("执行完毕后，"),s("code",[this._v("callback")]),this._v("将会接收一个对象，内容如下")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示签署成功，fail表示签署失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'返回结果数据'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//base64编码字符串类型或null")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("代码示例")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("var xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='\n window.FFW.signXDR(xdr, \"更新主域名\", function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n    alert('签名失败！'+response.message)\n  }else{\n    console.log('签名成功,数据可以直接提交到Horizon')\n    console.log(response.data)\n  }\n})\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0808/005124_ty0v_109284.png",alt:"调用界面"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"扫描二维码功能（scan）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫描二维码功能（scan）","aria-hidden":"true"}},[this._v("#")]),this._v(" 扫描二维码功能（scan）")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("scan(callback)")]),t._v("\n使用该方法可以调用扫描功能，并获取二维码扫描结果。\n参数说明：\n"),e("code",[t._v("callback")]),t._v(" 是scan执行后的回调函数，可以是函数名称或者是一个函数。\n在"),e("code",[t._v("scan")]),t._v("执行完毕后，"),e("code",[t._v("callback")]),t._v("将会接收一个对象，内容如下")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示签署成功，fail表示签署失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'返回结果数据'")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串类型或null")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("window.FFW.scan(function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n  }else{\n     console.log('scan result:' + response.data)//response.data是二维码的扫描结果，字符串类型\n  }\n })\n  \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分享功能（share"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享功能（share","aria-hidden":"true"}},[this._v("#")]),this._v(" 分享功能（share)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("options")]),this._v("是一个JSON，需要包含以下内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("分享功能")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'分享图片'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串，必须填写")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://fchain.io'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串类型，选填，要分享的网址")]),t._v("\n    files"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'图片内容'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数组，选填，支持远程图片地址或base64格式的图片等。如")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("callback")]),this._v(" 是share执行后的回调函数，可以是函数名称或者是一个函数。\n在"),s("code",[this._v("share")]),this._v("执行完毕后，"),s("code",[this._v("callback")]),this._v("将会接收一个对象，内容如下")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success | fail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//success表示成功，fail表示失败。")]),t._v("\n        message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示信息 | 错误信息'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("let options = {\n   message: '分享图片',\n   files: ['data:image/png;base64,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']\n}\nwindow.FFW.share(options,function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n  }else{\n    console.log('share success')\n  }\n})\n\n")])])])}],!1,null,null,null);s.default=n.exports}}]);