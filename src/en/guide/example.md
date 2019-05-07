## Example

You have to open below link in Firefly wallet.
https://t.cn/Re3xw6q
How to add: Choose 『Discovery』 in Firefly wallet, click the icon at the top right-hand corner, then click 『+』, input name and paste link above to make addition done. Return to 『Discovery』 to click the new added DAPP to open it.
Source code is [here](https://github.com/fchainio/firefly-examples/tree/master/dapp)

If your project based on `nodejs`, you can install official library called [fireflywallet-api](https://github.com/fchainio/fireflywallet-api), and the reference exmaple project is [an example of vue project] (https://github.com/fchainio/firefly-examples/tree/master/dapp/vue_demo).


FFW Object will be injected when you open the page in Firefly wallet, so you may know if this page is opend in wallet or not by checking the existence of windows.FFW object.

## Enable dev mode
Dev mode is not active by default, to activate it, click "My" - "Settings" - "About", click the firefly icon multiple times.

## Debug using Firefly wallet
Open 『Discovery』 page in Firefly wallet, click 『+』 at the top right-hand corner, input DAPP name and access link, then the new added DAPP is visible under "Custom Application" column. You can click the icon to open it.


## Debug using desktop device
Firefly desktop version provides the same function with the mobile version, but with more convenient way to debug. You can test all APIs except some only available to mobile devices, like: scanning, sharing, etc.
How to:
Click 『Discovery』 in navigation bar, click add button in "Custom Applications", put in name and application access link then save.
Click the new added DAPP, `Chrome developer tools` will pop up.


## Acquire version info about wallet

 Return current version info of Firefly wallet, String type, like: '2.1.8'.

```
  window.FFW.version    
```

 Value returned

```
'2.1.8'
```

## Acquire platform info of wallet OS

 Return the OS info of the device on which wallet rest, String type, like: Android or iOS.

```
window.FFW.platform
```

 Value returned

```
'android'
```

## Acquire UUID of current device

 Return the UUID of current device(data after SHA256 operation), String type.

```
window.FFW.uuid
```

 Value returned

```
'01a0865f4c2687d90f70f32b01c1e258bfd7aa6c7ccc35339dfacd72f5018bb8'
```

## Acquire the locale of wallet

 Return the locale value of current wallet, String type.

```
window.FFW.locale
```

 Value returned

```
'zh_cn'
```

## Acquire user address(ID)

 Return current user address, String type, like: `GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65`.

```
window.FFW.address
```

 Value returned

```
'GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65'
```


## Acquire user accountName

 Return current user accountName, String type, like: `FireFly Goose`

```
window.FFW.accountName
```

  Value returned

```
'FireFly Goose'
```

## Acquire user horizon server path

  Return user horizon server path, String type, like: `https://horizon.stellar.org`

```
window.FFW.horizonUrl
```

  Value returned

```
'https://horizon.stellar.org'
```  

## Acquire network passphrase

  Return network passphrase of user horizon

```
window.FFW.network
```

  Value returned

```
'Public Global Stellar Network ; September 2015'
```


## Acquire user balance

 Return the balance info of current user. ` balances(callback)`
 You can issuer assets on Stellar network, so one user may have lots of different assets. You can get all assets info one user holds with this method.
 This method get balance info from the horizon wallet appointed, and return.

- Parameters description:
- `callback` is the callback function after balance method gets executed, which could be a function name or a function.
- https://www.stellar.org/developers/horizon/reference/endpoints/accounts-single.html
- After execution of balance is done, `callback` will welcome a object, content like below: 

```javascript
    {
        code: 'success | fail',     //success, assets info query ok; fail, assets info query fail.
        message: 'notification info | error info',
        data: []     //Array type. Content is assets info of current user.
     }
```

> Code sample

```
window.FFW.balances(function(response){
        if(response.code === 'fail'){
             console.log('error:' + response.message)  
             alert('Assets info query fail! '+response.message)
        }else{
             console.log('query for balances successfully')
             $("#balances_data").text(JSON.stringify(response.data))
             alert('Assets info query OK!')
        }
});
```

 Value returned

```
[
    {
      "balance": "1.0000000",       //asset balance
      "limit": "707382697076.8900000",  //upper limit of one asset that one user could hold
      "asset_type": "credit_alphanum4",   //Type of asset, credit_alphanum4 or credit_alphanum12.
      "asset_code": "XFF",        //code of the asset
      "asset_issuer": "GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF"   //issuer of the asset
    },
    {
      "balance": "1.9999900",   //balance
      "asset_type": "native"       //native means native asset of Stellar network, XLM
    }
]
```

## Payment


 `pay(data, callback)`
 You can pay specified amount of asset to other user with this method.
 Parameters description:
 `data` is a JSON, contents need to be like below:

```javascript
   {
    destination: 'reciever address',  //string, required
    code: 'asset code',           //string, required
    issuer: 'asset issuer',     //string, can only skip if sending XLM
    amount: 'amount to send', // number, required
    memo_type: 'type of memo', //string, optional, enum choices: NONE TEXT HASH ID RETURN
    memo: 'memo content'   //string, optional, can only skip if memo_type is NONE, otherwise input corresponding value according to memo_type
   }
```
About the concept about `code` and `issuer`, you may refer to [stellar official document](https://www.stellar.org/developers/guides/concepts/assets.html), [Chinese version](https://docs.stellarcn.org/developers/guides/concepts/assets.html)
About the concept about `memo` and `memo_type`, you may refer to [here](https://www.stellar.org/developers/guides/concepts/transactions.html#memo), later we will give an explain in plain english. 
`callback` is the callback function after payment gets executed, which could be a function name or a function.
After payment execution gets done, `callback` will welcome an object, content like below:

```javascript
    {
        code: 'success | fail',     //success, payment ok; fail, payment fail
        message: 'notification info | error info',
        data: 'result data returned'     //object or null
     }
```

Code sample

```
window.FFW.pay({
         destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', 
         code: 'XFF', 
         issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
         amount: 1, 
         memo_type: 'TEXT',  
         memo: 'Hello,FFW'
       }, function(response){
           if(response.code === 'fail'){
             console.log('error:' + response.message)  
             alert('Payment failed! '+response.message)
           }else{
             console.log('pay success')
             alert('Payment ok!')
             //your business code goes here
           }
});
```

![calling interface](https://static.oschina.net/uploads/space/2018/0806/162145_Uid5_109284.png)

## Pathpayment


WIP...

## Using secret key of current user to sign


 ` sign(data, callback)` 
 You may use this method to sign your data, which will be verified. Scenarios include: Application will get user identity by verifying the data signed by the same user, then may allow user to login application.
 Paramenters description:
 `data` is a string of JSON format. The length limit of data (WIP)
 `callback` is the callback function after sign gets executed, which could be a function name or function.
 After `sign` execution gets done, `callback` will welcome an object, content like below:

```javascript
    {
        code: 'success | fail',     //success, means sign ok; fail, means sign failed
        message: 'notification info | error info',
        data: 'result data returned'     //base64 encode string or null
     }
```


Code sample

```
let data = {name: 'firefly wallet dapp',desc:'the first hello in the world'}
data = JSON.stringify(data)
console.log('The data to sign:' +data)
window.FFW.sign(data, function(response){
    if(response.code === 'fail'){
        console.log('error:' + response.message)  
    }else{
        console.log('success')
        console.log('The result data after signing: '+response.data)
    }
})
```

 Value returned

```
The data to sign:{"time":1533626528508,"address":"GACJFMOXTSE7QOL5HNYI2NIAQ4RDHZTGD6FNYK4P5THDVNWIKQDGOODU"}
The result data after signing:4foYmY0Nrx1QPT5CfJEsJcYM0o40l4sHDo8aHJ0mHNq0ZY9Q7753FieHXBK3dJJ32+Lhw3UIJnzF2pplyo3LBg==

```

## Validate signature

WIP...

## Let user trust asset


 `trust(code, issuer, callback)`
 User may trust specified asset with this method.
 Parameters description:
 `code` is string, whose content should be alphanumeric code, a.k.a [a-z][A-Z][0-9]. Lenght is 1-12 characters.
 `issuer` is string, whose content is stellar address, like: `GCKKUWHT3ILQWWKQ3MUOCAC7LRJNLCOES7SEI6TCQVGZD4GCULO2PGNU`.
 `callback` is the callback function after trust gets executed, which could be a function name or function.
 After `trust` execution gets done, `callback` will be expecting an object, content like below:


Code sample

```
var code = 'XFF';
var issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';
window.FFW.trust(code,issuer,function(response){
   if(response.code === 'fail'){
    console.log('error:' + response.message)  
       alert('Trust failed')
    }else{
       console.log('trust success')
       alert('Trust OK')
    }
})
```

![calling interface](https://static.oschina.net/uploads/space/2018/0808/003018_3Kcb_109284.png)

## Ask user to sign XDR


 ` signXDR(data, message, callback)`
 `signXDR` is a underlying method. You may perform advanced operation if API provided by Firefly wallet can not meet your requirement.
 Prerequisite: You have to understand the underlying SDK of Stellar, which requires you to be able to create a Transaction package manually. You would have to sign the Transaction which you created in XDR format, then submit it to horizon.
 Parameters description:
 `data` is string, the Transaction you created in XDR format.
 ~~`message` is string, used to tell others the usage of this Transaction.~~
 `callback` is the callback function after signXDR gets executed, which could be a function name or function.

 After `signXDR` execution gets done, `callback` will be expecting an object, content like below:

```javascript
    {
        code:  'success | fail',     //success, means signXDR ok; fail, means signXDR failed
        message:'notification info | error info',
        data:'Result data returned'     //base64 encoded string or null
     }
```

Code sample

```
var xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='
 window.FFW.signXDR(xdr, "update domain name", function(response){
  if(response.code === 'fail'){
    console.log('error:' + response.message)  
    alert('signXDR Failed!'+response.message)
  }else{
    console.log('signXDR OK, you can submit data to Horizon now!')
    console.log(response.data)
  }
})
```

![calling interface](https://static.oschina.net/uploads/space/2018/0808/005124_ty0v_109284.png)

## QR Scan


 `scan(callback) `
 You can scan QR code and get the result with this method.
 Parameters description:
 `callback` is the callback function after scan gets executed, which could be a function name or function.
 After `scan` execution gets done, `callback` will be expecting an object, content like below:
```javascript
    {
        code:  'success | fail',     //success, means scan ok; fail, means scan failed
        message:'notification info | error info',
        data:'result data returned'     //string or null
     }
```

Code sample

```
window.FFW.scan(function(response){
  if(response.code === 'fail'){
    console.log('error:' + response.message)  
  }else{
     console.log('scan result:' + response.data)//response.data is the result of the scanned QR code, string
  }
 })
  
```

## Social share

 `share(options,callback)`
 You can leverage share function of the device with this method. The implement is [here](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)

 `options` is a JSON, needs to have below content:

`share`
```javascript
   {
    message: 'picture share',  //string, required
    url: 'https://fchain.io',//string, optional, the url you want to share
    files: ['picture content'],           //Array, optional, supports remote picture urls or picture data in base64 format
   }
```

`callback` is the callback function after share gets executed, which could be a function name or function.
After `share` execution gets done, `callback` will be expecting an object, content like below:
```javascript
    {
        code:  'success | fail',     //success, means share ok; fail, means share failed
        message:'notification info | error info'
    }
```

Code sample

```
let options = {
   message: 'picture share',
   files: ['data:image/png;base64,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']
}
window.FFW.share(options,function(response){
  if(response.code === 'fail'){
    console.log('error:' + response.message)  
  }else{
    console.log('share success')
  }
})

```
