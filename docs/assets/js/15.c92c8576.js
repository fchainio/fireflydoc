(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(n,e,t){"use strict";t.r(e);var a=t(42),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"js-bridge接口协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-bridge接口协议"}},[n._v("#")]),n._v(" JS Bridge接口协议")]),n._v(" "),t("p",[n._v("运行环境给JS（即DAPP）提供的原生能力")]),n._v(" "),t("ul",[t("li",[n._v("取消back recovery两个接口")])]),n._v(" "),t("h3",{attrs:{id:"所有接口函数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#所有接口函数说明"}},[n._v("#")]),n._v(" 所有接口函数说明")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[n._v("函数名")]),n._v(" "),t("th",{staticStyle:{"text-align":"left"}},[n._v("参数")]),n._v(" "),t("th",{staticStyle:{"text-align":"left"}},[n._v("函数说明")])])]),n._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("balances")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("返回当前登陆账户的余额")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("sign")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("data:Object,callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("对JSON格式的data数据进行签名")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("pay")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("data:Object,callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("支付功能，将提交的hash结果返回")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("pathPayment")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("data:Object,callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("路径支付，将提交的hash结果返回")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("trust")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("code:String,issuer:String,callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("授信资产，将授信结果返回")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("signXDR")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("data:String,callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("XDR签名")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("scan")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("callback:Function")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("打开扫描二维码界面")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("openDApp")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("appid:String")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("打开其他DApp")])]),n._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[n._v("initWindow")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("options:Object")]),n._v(" "),t("td",{staticStyle:{"text-align":"left"}},[n._v("初始化当前界面的窗口")])])])]),n._v(" "),t("h2",{attrs:{id:"接口代码整理说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口代码整理说明"}},[n._v("#")]),n._v(" 接口代码整理说明")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/**\n * 接口根对象\n */\nwindow.qlchain = {\n\n  /**\n   * 当前运行环境版本号（v2.1.0添加，未正式上线）\n   */\n  version:'2.2.6',\n  /**\n   * 当前运行环境的操作系统，ios或android，（v2.1.0添加）\n   */\n  platform: 'ios',\n\n  /**\n   * 属性，String类型\n   * 当前打开DAPP的运行环境的登陆账户公钥地址\n   */\n  address: 'GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65',\n  /**\n   * \b属性，Array类型\n   * 当前打开DAPP的运行环境的联系人信息\n   * 2.4版本后取消\n   */\n  contacts: [],\n\n  /**\n   * 属性，Array类型\n   * 当前打开DAPP的运行环境的地址簿\n   * 2.4版本后取消\n   */\n  myaddresses: [],\n  \n /**\n  * 当前设备的UUID信息，针对该信息进行了加密后提供出来的\n  */\n  uuid = '设备的UUID信息加密信息',\n\n /**\n  * 当前运行环境的语言设置\n  */\n  locale = 'zh_cn';\n\n   /**\n   * 查询账户余额\n   * @param callback: function类型，接收参数为response,\n   * {\n   *   code: 'success或fail', \n   *   message: '提示信息或错误信息', \n   *   data: Array类型，数据来自于account的balances属性，见https://www.stellar.org/developers/horizon/reference/endpoints/accounts-single.html中account的balances属性\n   * }\n   */\n   balances(callback){\n        //code\n   };\n\n  /**\n   * 支付方法\n   * @param {Object} data 参数\n   *  data: {\n   *    destination: '接收方的公钥G地址', \n   *    code: '资产编码', \n   *    issuer: '资产发行方', \n   *    amount: '资产发送数量，number类型', \n   *    memo_type: '备注类型，可取值：NONE TEXT HASH ID RETURN', \n   *    memo: '备注'\n   *  }\n   * @param {string,function} callback 回调函数，可以是函数名称也可以是函数，\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息',\n   *            data:'返回结果数据，是object类型，可能为null'\n   *          }\n   * 示例：\n   *   qlchain.pay({\n   *      destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', \n   *      code: 'XFF', \n   *      issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', \n   *      amount: 100, \n   *      memo_type: 'TEXT', \n   *      memo: 'Hello,qlchain'\n   *    }, function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('pay success')\n   *        }\n   *    })\n   */\n  pay(data, callback){\n    // code\n  },\n\n  /**\n   * 路径支付方法\n   * @param {Object} data 参数\n   *  data: {\n   *    destination: '接收方的公钥G地址', \n   *    code: '资产编码', \n   *    issuer: '资产发行方', \n   *    amount: '资产发送数量，number类型', \n   *    memo_type: '备注类型，可取值：NONE TEXT HASH ID RETURN', \n   *    memo: '备注'\n   *  }\n   * @param {string或function} callback 回调函数，可以是函数名称也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息',\n   *            data:'返回结果数据，是object类型，可能为null'\n   *          }\n   * 示例：\n   *   qlchain.pathPayment({\n   *      destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', \n   *      code: 'XFF', \n   *      issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', \n   *      amount: 100, \n   *      memo_type: 'TEXT', \n   *      memo: 'Hello,qlchain'\n   *    }, function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('success')\n   *        }\n   *    })\n   */\n  pathPayment(data, callback){\n    //code\n  },\n\n  /**\n   * 对数据进行签名，主要是针对一些数据进行签名，方便后台应用确认当前操作人员具有账户的权限，防止恶意请求\n   * @param {String} data 要进行签名的数据，必须为json数据类型，然后转为String格式，由于json数据转到后台之后，要保证后台取的json数据和前台的json数据格式字段顺序一致，否则会校验失败\n   * @param {string或function} callback 回调函数，可以是函数名称也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息',\n   *            data:'返回结果数据，是string类型，返回签名完成后数据的base64结果'\n   *          }\n   *    示例：\n   *    let data = {name: 'qlchain runtime dapp'}\n   *    data = JSON.stringify(data)\n   *    qlchain.sign(data, function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('do success')\n   *          console.log('对{name: \"qlchain runtime dapp\"}签名后的结果：'+response.data)\n   *        }\n   *    })\n   */\n  sign(data, callback){\n    //code\n  },\n\n  /**\n   * 针对transaction生成的xdr进行签名，生成可提交到horizon的transaction xdr\n   * @param {string} data 必须为transaction生成的xdr \n   * @param {String} message 提示信息\n   * @param {string或function} callback ,回调函数，可以是函数名称也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息',\n   *            data:'返回结果数据，是string类型，返回签名完成后transaction对应的xdr'\n   *          }\n   * 示例：\n   *   let xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='\n   *   qlchain.signXDR(xdr, function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('do success')\n   *          console.log('对\bXDR签名后的XDR结果：'+response.data)\n   *        }\n   *    })\n   */\n  signXDR(data, message, callback){\n    // code\n  },\n  /**\n   * 2.4版本后取消\n   * 备份数据，备份当前用户的contact和myaddress\n   * @param {string或function} callback 回调函数，可以是函数名称也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息',\n   *            data:'返回结果数据，是string类型，返回对contact和myaddress加密后的数据,可以直接保存该结果到系统中'\n   *          }\n   * 示例：\n   *   qlchain.backup(function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('do success')\n   *          console.log('加密后的备份数据：'+response.data)\n   *        }\n   *    })\n   */\n  backup(callback){\n    //code\n  },\n\n  /**\n   * 2.4版本后取消\n   * 恢复数据函数，根据backup函数加密备份后的数据，重新恢复到当前运行环境中进行覆盖\n   * @param {string} data \n   * @param {string或function} callback 回调函数，可以是函数名称也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息'\n   *          }\n   * 示例：\n   *   //其中，data是backup备份操作后拿到的数据\n   *   qlchain.recovery(data,function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('do success')\n   *        }\n   *    })\n   */\n  recovery(data, callback){\n    //code\n  },\n  /**\n   * 授信资产\n   * @param {string} code 资产编码\n   * @param {string} issuer 资产发行方 \n   * @param {string或function} callback 回调函数，可以是函数名称，也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息'\n   *          }\n   * 示例：\n   *   let code = 'XFF';\n   *   let issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';\n   *   qlchain.trust(code,issuer,function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('do success')\n   *        }\n   *    })\n   */\n  trust(code, issuer, callback){\n    //code\n  }\n\n /**\n  * 打开二维码扫描功能，接收回调函数，用于接收二维码的扫描结果\n  * 示例：\n  *   qlchain.scan(function(response){\n  *        if(response.code === 'fail'){\n  *          console.log('error:' + response.message)  \n  *        }else{\n  *          console.log('scan result:' + response.data)//response.data是二维码的扫描结果，字符串类型\n  *        }\n  *    })\n  */ \n  scan(callback){\n   // code\n  }\n\n  /**\n   * 调用共享功能，具体的分享实现见：https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin\n   * @param {Object} options 设置参数\n   * @param {string或function} callback 回调函数，可以是函数名称，也可以是函数\n   *      回调函数接收一个对象\n   *        {\n   *            code:'可取fail或success,false表示失败，success表示处理成功',\n   *            message:'提示信息'\n   *          }\n   * 示例：\n   *   let options = {\n   *      message: '分享图片',\n   *      files: ['data:image/png;base64,iVBORw0......K5CYII='], //图片，支持远程图片或base64格式的图片等\n   *     };\n   *   qlchain.share(options,function(response){\n   *        if(response.code === 'fail'){\n   *          console.log('error:' + response.message)  \n   *        }else{\n   *          console.log('share success')\n   *        }\n   *    })\n   */\n  share(options,callback){\n    //code\n  }\n  /**\n   * 跳转到其他的DAPP中\n   * @param {String} 其他dapp的dappid的值\n   * \n   */\n  openDApp(dappid){\n\n  }\n\n  /**\n   * 初始化窗口界面\n   * @param {Object} config 配置信息\n   * 示例：\n   * {\n   *   \"navigationBarBackgroundColor\":\"#ffffff\", //String 导航栏的背景色\n   *   \"navigationBarTextStyle\":\"black or white\" //String 导航栏的字段颜色，支持black或white取值\n   *    \"navigationBarTitleText\":\"\"//String,导航栏标题文字内容\n   *    \"themeStyle\":\"\"//String, 主题， dark或white\n   *    \"navigationStyle\":\"\" //String 导航栏样式，仅支持以下值：default 默认样式,custom 自定义导航栏，只保留右上角胶囊按钮\n   * }\n   * \n   * @param {Function} callback \n   * \n   */\n  initWindow(config, callback){\n    //code\n  };\n\n}\n")])])]),t("h2",{attrs:{id:"以太运行环境协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以太运行环境协议"}},[n._v("#")]),n._v(" 以太运行环境协议")]),n._v(" "),t("p",[n._v("泉链运行环境v3.x版本支持比特币、以太（含ERC20）、恒星三种区块链代币，并且在原有JS API的基础支持恒星生态的基础上，通过web3.js支持以太DApp。\nDApp浏览器兼容Metamask, 你可以直接把你的Ethereum DApp迁移到 泉链运行环境， 甚至不用写任何代码。")]),n._v(" "),t("p",[n._v("泉链运行环境DApp浏览器和DApp的交互基于"),t("code",[n._v("EIP1102")]),n._v("的标准，DApp必须按照"),t("code",[n._v("EIP1102")]),n._v("的方式才可以拿到用户帐号、和执行其他操作。")]),n._v(" "),t("p",[n._v("你也可以检查 metamask 的相关"),t("a",{attrs:{href:"https://github.com/MetaMask/faq/blob/09281ac3dfcc19703f25fc9c960d2b7c65a0a4b3/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check",target:"_blank",rel:"noopener noreferrer"}},[n._v("文档"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);