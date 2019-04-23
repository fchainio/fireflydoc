## URL Schema protocol

Protocols supported by default:
 1. xff://open.fchain.io
  - scheme:xff  
  - host:open.fchain.io
 2. web+stellar://
   - ref to[SEP0007](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0007.md)

---

Application scenarios supported


|Operation name|Protocol applied|Implemented or not|
|:---|:---|:---|
|Start APP|XFF|√|
|Create wallet account|XFF|√|
|Show quotes|XFF|√|
|Add contact|XFF|√|
|Trust|XFF, web+stellar|√|
|Payment|XFF, web+stellar|√|
|Pathpayment|XFF, web+stellar|√|
|Sign TX|XFF, web+stellar|√|
|Deposit|XFF|√|
|Withdraw|XFF|√|
|Set inflation pool|XFF|√|
|Open DAPP detail|XFF|√|
|Open DAPP|XFF|√|
|Open red package|XFF|√|
|Claim red package|XFF|√|
|Check red package records, send red package|XFF|√|
|Open certain asset detail|XFF|√|
|Scan QR to login|https|√|

---

 XDR or Hash data in examples would be accurate, only for demo purpose


---
## Start App
- Protocol URL
  - xff://open.fchain.io/app/start/
- Protocol example
``` xff://open.fchain.io/app/start/```
- Parameters description
  - no parameters needed

---
## Wallet
### Create or import wallet
- Protocol URL
  - xff://open.fchain.io/wallet/create/
- Protocol example
``` xff://open.fchain.io/wallet/create/```
- Parameters description

|name|type|required|description|  
|-----|-----|-----|----|
|name|string|false|wallet name|
|mnemonic|string|false|mnemonic|
|seed|string|false|secret seed|
---

## Quotes
### Open trade pair(k line)
- Protocol URL
  - xff://open.fchain.io/market/kline
- Protocol example
```
xff://open.fchain.io/market/kline?basecode=XLM&baseissuer=&countercode=XCN&counterissuer=GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNY
```
- Parameters description

|name|type|required|description|  
|-----|-----|-----|----|
|basecode|string|true|base asset code|
|baseissuer|string|true|base asset issuer, only skip when using XLM|
|countercode|string|true|counter asset code|
|counterissuer|string|true|counter asset issuer, only skip when using XLM|

## Add custom trade pair
- Protocol URL
  - xff://open.fchain.io/market/addpair
- Protocol example
```
xff://open.fchain.io/market/addpair?basecode=XLM&baseissuer=&countercode=XCN&counterissuer=GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNY
```
- Parameters description

|name|type|required|description|  
|-----|-----|-----|----|
|basecode|string|true|base asset code|
|baseissuer|string|true|base asset issuer, only skip when using XLM|
|countercode|string|true|counter asset code|
|counterissuer|string|true|counter asset issuer, only skip when using XLM|
---

## Dapp
## Open DAPP page at discovery tab
- Protocol URL
  - xff://open.fchain.io/discovery/dappinfo 
- Protocol example
```xff://open.fchain.io/discovery/dappinfo?title=dappname&appId=000001 ```
- Parameters description

|name|type|required|description|  
|-----|-----|-----|----|
|title|string|false|DAPP name|
|appId|string|true|Dapp appId|

### Open one specific DAPP
- Protocol URL
  - xff://open.fchain.io/dapp/container 
- Protocol example
```
xff://open.fchain.io/dapp/container?title=dappname&appId=000001&url=http://fchain.io&color=#313035
```
- Parameters description, other parameters can also be added so that DAPP could use them to perform its own business logic.

|name|type|required|description|  
|-----|-----|-----|----|
|title|string|false|dapp name|
|appId|string|false|Dapp appId|
|url|string|true|accessible URL|
|color|string|false|color of toolbar|
---

## Add contact
### Add contact by opening add contact page
- Protocol URL
  - XFF://open.fchain.io/contacts/create
- Protocol example
```
XFF://open.fchain.io/contacts/create?name=开放平台&account=GBUKVELXNRMYA4ZZXCVDPNCKZNZ2AOU5IE45ASAFGPF7EDTZCVJU42UA&memo_type=MEMO_TEXT&memo=123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|name|string|false|contact name|
|account|string|true|account address|
|memo_type|string|false|memo type, could be MEMO_TEXT, MEMO_ID, MEMO_HASH and MEMO_RETURN|
|memo|string|false|memo content|
---

## Trust
### Trust certain asset by opening trust page, providing alike FFW.trust function in JSBridge. Return the result(hash or error) to callback if there is one
- Protocol URL
  - XFF://open.fchain.io/trust
- Protocol example
```
XFF://open.fchain.io/trust?code=XCN&issuer=GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNY&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123

web+stellar:trust?code=XCN&issuer=GCNY5OXYSY4FKHOPT2SPOQZAOEIGXB5LBYW3HVU3OWSTQITS65M5RCNYcallback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|code|string|true|asset code|
|issuer|string|true|asset issuer|
|network|string|false|Stellar network, `public` or `test`|
|msg|string|false|operation explanation|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, `Content-Type: application/json`
```
# Success result, hash returned
{
    "tx_hash":"a3ae1da71646b25c66ce9f00cbd8bba0e7d5705529ccd4b746a85cd7c951509f"
}
# Error result, error message returned
{
    "error":"tx error code"
}
```
---

## Payment
### Open payment page, user confirm whether to send asset to other account, callback is supported.
- Protocols
  - XFF
  - web+stellar
- Protocol example
```
XFF://open.fchain.io/pay?destination=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&amount=1&asset_code=XFF&asset_issuer=GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF&memo_type=MEMO_TEXT&memo=pay&msg=test&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123

web+stellar:pay?destination=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&amount=1&asset_code=XFF&asset_issuer=GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF&memo_type=MEMO_TEXT&memo=pay&msg=test&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|destination|string|true|reciever address|
|asset_code|string|false|asset code, XLM if null|
|asset_issuer|string|false|asset issuer|
|memo_type|string|false|memo type, could be MEMO_TEXT, MEMO_ID, MEMO_HASH and MEMO_RETURN|
|memo|string|false|memo content|
|msg|string|false|notification message|
|network|string|false|Stellar network, `public` or `test`|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, Content-Type: application/json
```
# Success result, hash returned
{
    "tx_hash":"a3ae1da71646b25c66ce9f00cbd8bba0e7d5705529ccd4b746a85cd7c951509f"
}
# Error result, error message returned
{
    "error":"tx error code"
}
```
---

## Pathpayment
### User could choose different assets to pay, failure ratio exists, basically the same effect as FFW.pathpayment
- Protocols
  - XFF or web+stellar
- Protocol example
```
XFF://open.fchain.io/pathpay?destination=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&amount=1&asset_code=XFF&asset_issuer=GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF&memo_type=MEMO_TEXT&memo=pay&msg=test&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123

web+stellar://open.fchain.io/pathpay?destination=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&amount=1&asset_code=XFF&asset_issuer=GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF&memo_type=MEMO_TEXT&memo=pay&msg=test&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|destination|string|true|reciever address|
|asset_code|string|false|asset code, XLM if null|
|asset_issuer|string|false|asset issuer|
|memo_type|string|false|memo type, could be MEMO_TEXT, MEMO_ID, MEMO_HASH and MEMO_RETURN|
|memo|string|false|memo content|
|msg|string|false|notification message|
|network|string|false|Stellar network, `public` or `test`|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, Content-Type: application/json
```
# Success result, hash returned
{
    "tx_hash":"a3ae1da71646b25c66ce9f00cbd8bba0e7d5705529ccd4b746a85cd7c951509f"
}
# Error result, error message returned
{
    "error":"tx error code"
}
```
---

## Sign TX
### Sign TX data recieved, user may choose to submit after signing it or immediately
- Protocol
  - XFF
  - web+stellar
- Protocol example
```
XFF://open.fchain.io/tx?xdr=AAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAZADOysIAAAG7AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAABua1i%2BivlQAAAAAAAQAAAAAAAAABAAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAAAAAAAAAmJaAAAAAAAAAAAA%3D&msg=test&pubkey=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123

web+stellar:tx?xdr=AAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAZADOysIAAAG7AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAABua1i%2BivlQAAAAAAAQAAAAAAAAABAAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAAAAAAAAAmJaAAAAAAAAAAAA%3D&msg=test&pubkey=GAD2EAYW6UXQPY6FLEPKOZEABVRU42SQAQVXQ5VOOAERNSTLXK3Q5UZ6&&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|xdr|string|true|transaction in XDR format(url encoded)|
|msg|string|false|notification message|
|pubkey|string|false|specified account to sign, used in multisign|
|network|string|false|Stellar network, `public` or `test`|
|auto|boolean|false|using walletg to send to Stellar network, `true` by default. will sign and submit result in XDR format to callback if `false`|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, `Content-Type: application/json`
```
# Done right, if auto is null or `true`, will submit hash to `callback`
{
    "tx_hash":"a3ae1da71646b25c66ce9f00cbd8bba0e7d5705529ccd4b746a85cd7c951509f"
}
#Done right, if auto is `false`, will submit result xdr to `callback`
{
    "xdr":"AAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAZADOysIAAAG7AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAABua1i+ivlQAAAAAAAQAAAAAAAAABAAAAAAeiAxb1LwfjxVkep2SADWNOalAEK3h2rnAJFsprurcOAAAAAAAAAAAAmJaAAAAAAAAAAAA="
}
# Error result, error message returned
{
    "error":"error message"
}
```
---

## Deposit
### Open deposit page, perform query according to assets in protocol or custom assets. If `callback` is provided, then all deposit data will submit to `callback` after user clicked confirm.
- Protocol
  - XFF
- Protocol example
```
XFF://open.fchain.io/deposit?asset_code=ETH&asset_issuer=GBETHKBL5TCUTQ3JPDIYOZ5RDARTMHMEKIO2QZQ7IOZ4YC5XV3C2IKYU&
callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|asset_code|string|false|asset code|
|asset_issuer|string|false|asset issuer|
|msg|string|false|notification message|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, `Content-Type: application/json`
```
# Done right, will submit info returned from anchor server to `callback`
{
    "account":"current account",
    "asset_code": "ETH",//the crypto currency you want to deposit to Stellar
    "asset_issuer": "GBETHKBL5TCUTQ3JPDIYOZ5RDARTMHMEKIO2QZQ7IOZ4YC5XV3C2IKYU",
    "how":"address deposited to",//the corresponding address(main net) user will deposit to, from anchor
    "eta":100,//estimated time, from anchor
    "min_amount":1,//minimum amount to deposit, from anchor
    "max_amount":100,//maximum amount to deposit, from anchor
    "fee_fixed":1,//fixed charge amount, from anchor
    "fee_percent":0.01,//ratio to charge, from anchor
    "extra_info":{}//extra info, from anchor
}
# Error result, error message returned
{
    "error":"error message"
}
```
---

## Withdraw
### Open withdarw page, get information about address, etc from URL, then finish process after user confirmation
- Protocol
  - XFF
- Protocol example
```
XFF://open.fchainlio/withdraw?destination=1MVrxv4712psDBRMwzLAhJTu2jGHeBqU6H&asset_code=BTC&asset_issuer=GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH&amount=1&memo=123&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|destination|string|true|address withdraw to|
|asset_code|string|true|asset code, stellar asset|
|asset_issuer|string|true|asset issuer, stellar asset|
|amount|number|false|amount to withdraw|
|msg|string|false|notification message|
|memo|string|false|memo content, will be used in first time withdrwal request|
|callback|string|false|callback address|
- callback address, submit parameters, POST method, Content-Type: application/json
```
# Done right
{
    "tx_hash":"hash value after withdrawal operation is done on Stellar network"
}
# Error result, error message returned
{
    "error":"error message"
}
```
---

## Set inflation pool
### Set inflation pool for current account
- Protocol
  - XFF
- Protocol example
```
XFF://open.fchainlio/pool?destination=GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW&msg=test&callback=https%3A%2F%2Fopen.fchain.io%2Ftrust%2Fcallback%2F123
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|destination|string|true|inflation pool address|
|msg|string|false|notification message|
|callback|string|false|callback|
- callback if there is one, submit parameters, POST method, ```Content-Type: application/json```
```
# Done right
{
    "tx_hash":"hash value after operation success"
}
# Error result, error message returned
{
    "error":"error message"
}
```
---

## Open red pocket
### Open red pocket, `appid=000003` for red pocket, opening it will be calling `xff://open.fchain.io/dapp/container?appId=000003`
- Protocol
  - XFF
- Protocol example
``` xff://open.fchain.io/hb```
---

## Claim red pocket
### Add parameter `k` on the basis of above URL, just pass k as parameter when opening red pocket DAPP
- Protocol
  - XFF
- Protocol example
``` xff://open.fchain.io//hb/dapp?k=红包口令```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|k|string|false|code to claim red pocket|
---

## search red pocket records or send red pocket
### Add parameter `v` on the basis of above URL, just pass v as parameter when opening red pocket DAPP
- Protocol
  - XFF
- Protocol example
``` xff://open.fchain.io/hb?v=log```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|v|string|false|view, `log` is to open red pocket records, `pay` is to open send red pocket page|
---

## Open asset detail
### Open detail page of one certain asset
- Protocol
  - XFF
- Protocol example
```
xff://open.fchain.io/asset?asset_code=ETH&asset_issuer=GBETHKBL5TCUTQ3JPDIYOZ5RDARTMHMEKIO2QZQ7IOZ4YC5XV3C2IKYU
```
- Parameters description

|name|type|required|description|
|:---|:---|:---|:---|
|asset_code|string|false|asset code, XLM if null|
|asset_issuer|string|false|asset issuer, XLM if null|
---

## Scan to login
### Scan to login, TBI
---