## 恒星基础知识

[官方网站](https://stellar.org)
[中文翻译](https://docs.stellarcn.org)

## 地址（address)

**恒星的地址格式**
恒星使用`ED25519算法`来生成公私钥对。并直接将`公钥（Public Key）`进行`Base32编码`作为地址（address)使用。编码格式称之为[StrKey](https://github.com/stellar/stellar-core/blob/master/src/crypto/StrKey.cpp)。根据该规范，地址和密钥在编码后均为56位长度。取值范围为[A-Z],[2-7]，不区分大小写，或者统一为大写。恒星地址以G开头，密钥以S开头。
**地址需要激活**
与比特币不同，恒星使用账户模型而不是UTXO模型，同时参考了现代银行业的特点。设计而成。地址激活类似于银行的开户动作。所以新生成一个地址/密钥之后，不能直接使用，需要使用`createAccount`操作发送1个XLM到该地址，完成创建动作。
恒星节点使用Postgres数据库存储实时状态。`createAccount`将在数据库中创建记录该地址的信息。


## XLM

恒星网络的原生资产称之为Lumens（光学单位流明），[缩写为XLM](https://zh.wikipedia.org/wiki/ISO_4217#以X开头的货币代码)。
网络上的地址最少拥有1个XLM，即已激活账号。
系统规定：每个地址在数据库中占用一条记录时，冻结0.5个XLM（也可以理解成押金）。当从数据库删除记录时，取消冻结（押金返还）。如果用户没有足够的XLM以供冻结，用户请求的操作会失败。
导致冻结的操作有很多，比如授信资产（trust)，挂单交易（offer）。记录数据（manageData），详见[事务部分](#事务（transaction）)

## 资产(asset)

恒星网络可以发行资产（asset）。
资产需要通过资产代码（code）与发行方（issuer）来唯一确定。
资产代码为1-12长度的字母数字（alphanumeric），区分大小写。例如“XFF”。发行方为标准恒星地址。
资产可以是恒星内生资产，如XFF，也可以与外部资产进行锚定，比如法定货币，或者数字货币。提供资产锚定服务的，称之为锚点（anchor）。
如上文所述，用户每授信一个资产类型，就会冻结0.5个XLM。

以XFF为例。xff对象即是网络中可确定的资产对象。

```
var xff = new StellarSdk.Asset(
  'XFF', 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF');
```

## 事务（transaction）

与数据库的事务概念类似，恒星也有事务的概念。事务中可以包含多个操作（operation）
操作是指系统规定的几个可以更改总账状态的的动作。比如createAccount，创建账户，payment支付与offer挂单操作等。
在一个事务中，可以包含最多100个操作。通过组合操作，可以完成很多事情。如果事务中的某个操作不能完成，比如payment超过账户的真实数额，整个事务都会回滚，即原子性。


## SDK

恒星有多种语言的SDK可以供开发者使用。 如[Javascript](https://www.stellar.org/developers/js-stellar-sdk/reference/)，[PHP](https://github.com/zulucrypto/stellar-api)，[Java](https://github.com/stellar/java-stellar-sdk)，[GO](https://github.com/stellar/go)，[Python](https://github.com/StellarCN/py-stellar-base)等。

可以使用SDK，完成签名验证，检查某个账号的余额与执行Payment等操作。

## 区块浏览器

目前比较好用的两个区块浏览器为 https://steexp.com 和 https://stellar.expert

