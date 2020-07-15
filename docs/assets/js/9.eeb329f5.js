(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{356:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("You have to open below link in qlchain runtime.\nhttps://t.cn/Re3xw6q\nHow to add: Choose 『Discovery』 in qlchain runtime, click the icon at the top right-hand corner, then click 『+』, input name and paste link above to make addition done. Return to 『Discovery』 to click the new added DAPP to open it.\nSource code is "),t("a",{attrs:{href:"https://github.com/fchainio/qlchain-examples/tree/master/dapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("If your project based on "),t("code",[e._v("nodejs")]),e._v(", you can install official library called "),t("a",{attrs:{href:"https://github.com/fchainio/qlchainruntime-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("qlchainruntime-api"),t("OutboundLink")],1),e._v(", and the reference exmaple project is [an example of vue project] (https://github.com/fchainio/qlchain-examples/tree/master/dapp/vue_demo).")]),e._v(" "),t("p",[e._v("qlchain Object will be injected when you open the page in qlchain runtime, so you may know if this page is opend in runtime or not by checking the existence of windows.qlchain object.")]),e._v(" "),t("h2",{attrs:{id:"enable-dev-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-dev-mode"}},[e._v("#")]),e._v(" Enable dev mode")]),e._v(" "),t("p",[e._v('Dev mode is not active by default, to activate it, click "My" - "Settings" - "About", click the qlchain icon multiple times.')]),e._v(" "),t("h2",{attrs:{id:"debug-using-qlchain-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-using-qlchain-runtime"}},[e._v("#")]),e._v(" Debug using qlchain runtime")]),e._v(" "),t("p",[e._v('Open 『Discovery』 page in qlchain runtime, click 『+』 at the top right-hand corner, input DAPP name and access link, then the new added DAPP is visible under "Custom Application" column. You can click the icon to open it.')]),e._v(" "),t("h2",{attrs:{id:"debug-using-desktop-device"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-using-desktop-device"}},[e._v("#")]),e._v(" Debug using desktop device")]),e._v(" "),t("p",[e._v('qlchain desktop version provides the same function with the mobile version, but with more convenient way to debug. You can test all APIs except some only available to mobile devices, like: scanning, sharing, etc.\nHow to:\nClick 『Discovery』 in navigation bar, click add button in "Custom Applications", put in name and application access link then save.\nClick the new added DAPP, '),t("code",[e._v("Chrome developer tools")]),e._v(" will pop up.")]),e._v(" "),t("h2",{attrs:{id:"acquire-version-info-about-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-version-info-about-runtime"}},[e._v("#")]),e._v(" Acquire version info about runtime")]),e._v(" "),t("p",[e._v("Return current version info of qlchain runtime, String type, like: '2.1.8'.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  window.qlchain.version    \n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'2.1.8'\n")])])]),t("h2",{attrs:{id:"acquire-platform-info-of-runtime-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-platform-info-of-runtime-os"}},[e._v("#")]),e._v(" Acquire platform info of runtime OS")]),e._v(" "),t("p",[e._v("Return the OS info of the device on which runtime rest, String type, like: Android or iOS.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.platform\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'android'\n")])])]),t("h2",{attrs:{id:"acquire-uuid-of-current-device"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-uuid-of-current-device"}},[e._v("#")]),e._v(" Acquire UUID of current device")]),e._v(" "),t("p",[e._v("Return the UUID of current device(data after SHA256 operation), String type.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.uuid\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'01a0865f4c2687d90f70f32b01c1e258bfd7aa6c7ccc35339dfacd72f5018bb8'\n")])])]),t("h2",{attrs:{id:"acquire-the-locale-of-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-the-locale-of-runtime"}},[e._v("#")]),e._v(" Acquire the locale of runtime")]),e._v(" "),t("p",[e._v("Return the locale value of current runtime, String type.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.locale\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'zh_cn'\n")])])]),t("h2",{attrs:{id:"acquire-user-address-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-user-address-id"}},[e._v("#")]),e._v(" Acquire user address(ID)")]),e._v(" "),t("p",[e._v("Return current user address, String type, like: "),t("code",[e._v("GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.address\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65'\n")])])]),t("h2",{attrs:{id:"acquire-user-accountname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-user-accountname"}},[e._v("#")]),e._v(" Acquire user accountName")]),e._v(" "),t("p",[e._v("Return current user accountName, String type, like: "),t("code",[e._v("qlchain Goose")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.accountName\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'qlchain Goose'\n")])])]),t("h2",{attrs:{id:"acquire-user-horizon-server-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-user-horizon-server-path"}},[e._v("#")]),e._v(" Acquire user horizon server path")]),e._v(" "),t("p",[e._v("Return user horizon server path, String type, like: "),t("code",[e._v("https://horizon.stellar.org")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.horizonUrl\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'https://horizon.stellar.org'\n")])])]),t("h2",{attrs:{id:"acquire-network-passphrase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-network-passphrase"}},[e._v("#")]),e._v(" Acquire network passphrase")]),e._v(" "),t("p",[e._v("Return network passphrase of user horizon")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.network\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'Public Global Stellar Network ; September 2015'\n")])])]),t("h2",{attrs:{id:"acquire-user-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acquire-user-balance"}},[e._v("#")]),e._v(" Acquire user balance")]),e._v(" "),t("p",[e._v("Return the balance info of current user. "),t("code",[e._v("balances(callback)")]),e._v("\nYou can issuer assets on Stellar network, so one user may have lots of different assets. You can get all assets info one user holds with this method.\nThis method get balance info from the horizon runtime appointed, and return.")]),e._v(" "),t("ul",[t("li",[e._v("Parameters description:")]),e._v(" "),t("li",[t("code",[e._v("callback")]),e._v(" is the callback function after balance method gets executed, which could be a function name or a function.")]),e._v(" "),t("li",[e._v("https://www.stellar.org/developers/horizon/reference/endpoints/accounts-single.html")]),e._v(" "),t("li",[e._v("After execution of balance is done, "),t("code",[e._v("callback")]),e._v(" will welcome a object, content like below:")])]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, assets info query ok; fail, assets info query fail.")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//Array type. Content is assets info of current user.")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("Code sample")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.balances(function(response){\n        if(response.code === 'fail'){\n             console.log('error:' + response.message)  \n             alert('Assets info query fail! '+response.message)\n        }else{\n             console.log('query for balances successfully')\n             $(\"#balances_data\").text(JSON.stringify(response.data))\n             alert('Assets info query OK!')\n        }\n});\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[\n    {\n      "balance": "1.0000000",       //asset balance\n      "limit": "707382697076.8900000",  //upper limit of one asset that one user could hold\n      "asset_type": "credit_alphanum4",   //Type of asset, credit_alphanum4 or credit_alphanum12.\n      "asset_code": "XFF",        //code of the asset\n      "asset_issuer": "GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF"   //issuer of the asset\n    },\n    {\n      "balance": "1.9999900",   //balance\n      "asset_type": "native"       //native means native asset of Stellar network, XLM\n    }\n]\n')])])]),t("h2",{attrs:{id:"payment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#payment"}},[e._v("#")]),e._v(" Payment")]),e._v(" "),t("p",[t("code",[e._v("pay(data, callback)")]),e._v("\nYou can pay specified amount of asset to other user with this method.\nParameters description:\n"),t("code",[e._v("data")]),e._v(" is a JSON, contents need to be like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'reciever address'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, required")]),e._v("\n    code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'asset code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, required")]),e._v("\n    issuer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'asset issuer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, can only skip if sending XLM")]),e._v("\n    amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'amount to send'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// number, required")]),e._v("\n    memo_type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'type of memo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, optional, enum choices: NONE TEXT HASH ID RETURN")]),e._v("\n    memo"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'memo content'")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, optional, can only skip if memo_type is NONE, otherwise input corresponding value according to memo_type")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("About the concept about "),t("code",[e._v("code")]),e._v(" and "),t("code",[e._v("issuer")]),e._v(", you may refer to "),t("a",{attrs:{href:"https://www.stellar.org/developers/guides/concepts/assets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("stellar official document"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://docs.stellarcn.org/developers/guides/concepts/assets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chinese version"),t("OutboundLink")],1),e._v("\nAbout the concept about "),t("code",[e._v("memo")]),e._v(" and "),t("code",[e._v("memo_type")]),e._v(", you may refer to "),t("a",{attrs:{href:"https://www.stellar.org/developers/guides/concepts/transactions.html#memo",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(", later we will give an explain in plain english.\n"),t("code",[e._v("callback")]),e._v(" is the callback function after payment gets executed, which could be a function name or a function.\nAfter payment execution gets done, "),t("code",[e._v("callback")]),e._v(" will welcome an object, content like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, payment ok; fail, payment fail")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'result data returned'")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//object or null")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.pay({\n         destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', \n         code: 'XFF', \n         issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', \n         amount: 1, \n         memo_type: 'TEXT',  \n         memo: 'Hello,qlchain'\n       }, function(response){\n           if(response.code === 'fail'){\n             console.log('error:' + response.message)  \n             alert('Payment failed! '+response.message)\n           }else{\n             console.log('pay success')\n             alert('Payment ok!')\n             //your business code goes here\n           }\n});\n")])])]),t("p",[t("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0806/162145_Uid5_109284.png",alt:"calling interface"}})]),e._v(" "),t("h2",{attrs:{id:"pathpayment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pathpayment"}},[e._v("#")]),e._v(" Pathpayment")]),e._v(" "),t("p",[e._v("WIP...")]),e._v(" "),t("h2",{attrs:{id:"using-secret-key-of-current-user-to-sign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-secret-key-of-current-user-to-sign"}},[e._v("#")]),e._v(" Using secret key of current user to sign")]),e._v(" "),t("p",[t("code",[e._v("sign(data, callback)")]),e._v("\nYou may use this method to sign your data, which will be verified. Scenarios include: Application will get user identity by verifying the data signed by the same user, then may allow user to login application.\nParamenters description:\n"),t("code",[e._v("data")]),e._v(" is a string of JSON format. The length limit of data (WIP)\n"),t("code",[e._v("callback")]),e._v(" is the callback function after sign gets executed, which could be a function name or function.\nAfter "),t("code",[e._v("sign")]),e._v(" execution gets done, "),t("code",[e._v("callback")]),e._v(" will welcome an object, content like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, means sign ok; fail, means sign failed")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'result data returned'")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//base64 encode string or null")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let data = {name: 'qlchain runtime dapp',desc:'the first hello in the world'}\ndata = JSON.stringify(data)\nconsole.log('The data to sign:' +data)\nwindow.qlchain.sign(data, function(response){\n    if(response.code === 'fail'){\n        console.log('error:' + response.message)  \n    }else{\n        console.log('success')\n        console.log('The result data after signing: '+response.data)\n    }\n})\n")])])]),t("p",[e._v("Value returned")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('The data to sign:{"time":1533626528508,"address":"GACJFMOXTSE7QOL5HNYI2NIAQ4RDHZTGD6FNYK4P5THDVNWIKQDGOODU"}\nThe result data after signing:4foYmY0Nrx1QPT5CfJEsJcYM0o40l4sHDo8aHJ0mHNq0ZY9Q7753FieHXBK3dJJ32+Lhw3UIJnzF2pplyo3LBg==\n\n')])])]),t("h2",{attrs:{id:"validate-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate-signature"}},[e._v("#")]),e._v(" Validate signature")]),e._v(" "),t("p",[e._v("WIP...")]),e._v(" "),t("h2",{attrs:{id:"let-user-trust-asset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-user-trust-asset"}},[e._v("#")]),e._v(" Let user trust asset")]),e._v(" "),t("p",[t("code",[e._v("trust(code, issuer, callback)")]),e._v("\nUser may trust specified asset with this method.\nParameters description:\n"),t("code",[e._v("code")]),e._v(" is string, whose content should be alphanumeric code, a.k.a [a-z][A-Z][0-9]. Lenght is 1-12 characters.\n"),t("code",[e._v("issuer")]),e._v(" is string, whose content is stellar address, like: "),t("code",[e._v("GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU")]),e._v(".\n"),t("code",[e._v("callback")]),e._v(" is the callback function after trust gets executed, which could be a function name or function.\nAfter "),t("code",[e._v("trust")]),e._v(" execution gets done, "),t("code",[e._v("callback")]),e._v(" will be expecting an object, content like below:")]),e._v(" "),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var code = 'XFF';\nvar issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';\nwindow.qlchain.trust(code,issuer,function(response){\n   if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n       alert('Trust failed')\n    }else{\n       console.log('trust success')\n       alert('Trust OK')\n    }\n})\n")])])]),t("p",[t("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0808/003018_3Kcb_109284.png",alt:"calling interface"}})]),e._v(" "),t("h2",{attrs:{id:"ask-user-to-sign-xdr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ask-user-to-sign-xdr"}},[e._v("#")]),e._v(" Ask user to sign XDR")]),e._v(" "),t("p",[t("code",[e._v("signXDR(data, message, callback)")]),e._v(" "),t("code",[e._v("signXDR")]),e._v(" is a underlying method. You may perform advanced operation if API provided by qlchain runtime can not meet your requirement.\nPrerequisite: You have to understand the underlying SDK of Stellar, which requires you to be able to create a Transaction package manually. You would have to sign the Transaction which you created in XDR format, then submit it to horizon.\nParameters description:\n"),t("code",[e._v("data")]),e._v(" is string, the Transaction you created in XDR format.\n"),t("s",[t("code",[e._v("message")]),e._v(" is string, used to tell others the usage of this Transaction.")]),e._v(" "),t("code",[e._v("callback")]),e._v(" is the callback function after signXDR gets executed, which could be a function name or function.")]),e._v(" "),t("p",[e._v("After "),t("code",[e._v("signXDR")]),e._v(" execution gets done, "),t("code",[e._v("callback")]),e._v(" will be expecting an object, content like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, means signXDR ok; fail, means signXDR failed")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Result data returned'")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//base64 encoded string or null")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='\n window.qlchain.signXDR(xdr, \"update domain name\", function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n    alert('signXDR Failed!'+response.message)\n  }else{\n    console.log('signXDR OK, you can submit data to Horizon now!')\n    console.log(response.data)\n  }\n})\n")])])]),t("p",[t("img",{attrs:{src:"https://static.oschina.net/uploads/space/2018/0808/005124_ty0v_109284.png",alt:"calling interface"}})]),e._v(" "),t("h2",{attrs:{id:"qr-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qr-scan"}},[e._v("#")]),e._v(" QR Scan")]),e._v(" "),t("p",[t("code",[e._v("scan(callback)")]),e._v("\nYou can scan QR code and get the result with this method.\nParameters description:\n"),t("code",[e._v("callback")]),e._v(" is the callback function after scan gets executed, which could be a function name or function.\nAfter "),t("code",[e._v("scan")]),e._v(" execution gets done, "),t("code",[e._v("callback")]),e._v(" will be expecting an object, content like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, means scan ok; fail, means scan failed")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'result data returned'")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string or null")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("window.qlchain.scan(function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n  }else{\n     console.log('scan result:' + response.data)//response.data is the result of the scanned QR code, string\n  }\n })\n  \n")])])]),t("h2",{attrs:{id:"social-share"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#social-share"}},[e._v("#")]),e._v(" Social share")]),e._v(" "),t("p",[t("code",[e._v("share(options,callback)")]),e._v("\nYou can leverage share function of the device with this method. The implement is "),t("a",{attrs:{href:"https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("options")]),e._v(" is a JSON, needs to have below content:")]),e._v(" "),t("p",[t("code",[e._v("share")])]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'picture share'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, required")]),e._v("\n    url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://fchain.io'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//string, optional, the url you want to share")]),e._v("\n    files"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'picture content'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//Array, optional, supports remote picture urls or picture data in base64 format")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("code",[e._v("callback")]),e._v(" is the callback function after share gets executed, which could be a function name or function.\nAfter "),t("code",[e._v("share")]),e._v(" execution gets done, "),t("code",[e._v("callback")]),e._v(" will be expecting an object, content like below:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        code"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'success | fail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//success, means share ok; fail, means share failed")]),e._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'notification info | error info'")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Code sample")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let options = {\n   message: 'picture share',\n   files: ['data:image/png;base64,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']\n}\nwindow.qlchain.share(options,function(response){\n  if(response.code === 'fail'){\n    console.log('error:' + response.message)  \n  }else{\n    console.log('share success')\n  }\n})\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);