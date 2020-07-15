## JS Bridge protocol

The native ablility that runtime offered to DAPP

- cancel back recovery two apis


### All API function description
|function name|parameters|description|
|:---- |:---- |:---- |
|balances|callback:Function|return balance of current account|
|sign|data:Object,callback:Function|sign data in JSON format|
|pay|data:Object,callback:Function|payment, return hash value result|
|pathPayment|data:Object,callback:Function|pathpayment, return hash value result|
|trust|code:String,issuer:String,callback:Function|trust asset, return result|
|signXDR|data:String,callback:Function|sign XDR|
|scan|callback:Function|open qr code scan page|
|share|options:Object,callback:Function|share|
|openDApp|appid:String|open DAPP|
|initWindow|options:Object|initialize current window|



## Interface description
```
/**
 * Interface root object
 */
window.qlchain = {

  /**
   * current runtime version number(added in v2.1.0)
   */
  version:'2.2.6',
  /**
   * current runtime OS, iOS or android(added in v2.1.0)
   */
  platform: 'ios',

  /**
   * attribute, String
   * public key address for current logged in account
   */
  address: 'GCENG5GLJ35GPJZQM3YJSFL3GMQ57MA5U6ZAAE6V4XIFVXFPY5MS5Q65',
  /**
   * attribute, Array
   * Contacts info
   * canceled since 2.4
   */
  contacts: [],

  /**
   * attribute, String
   * Address book
   * canceled since 2.4
   */
  myaddresses: [],
  
 /**
  * UUID encrypted
  */
  uuid = 'UUID encrypted',

 /**
  * locale of current runtime
  */
  locale = 'zh_cn';

   /**
   * acquire balance
   * @param callback: function type, expecting parameter response
   * {
   *   code: 'success or fail', 
   *   message: 'notification or error', 
   *   data: Array, data from balances attribute of account, check https://www.stellar.org/developers/horizon/reference/endpoints/accounts-single.html
   * }
   */
   balances(callback){
        //code
   };

  /**
   * payment method
   * @param {Object} data parameter
   *  data: {
   *    destination: 'reciever stellar address', 
   *    code: 'asset code', 
   *    issuer: 'asset issuer', 
   *    amount: 'amount, number', 
   *    memo_type: 'memo type, could be: NONE TEXT HASH ID RETURN', 
   *    memo: 'memo content'
   *  }
   * @param {string,function} callback function
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message',
   *            data:'result returned, object or null'
   *          }
   * Example:
   *   qlchain.pay({
   *      destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', 
   *      code: 'XFF', 
   *      issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
   *      amount: 100, 
   *      memo_type: 'TEXT', 
   *      memo: 'Hello,qlchain'
   *    }, function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('pay success')
   *        }
   *    })
   */
  pay(data, callback){
    // code
  },

  /**
   * pathpament method
   * @param {Object} data parameter
   *  data: {
   *    destination: 'reciever stellar address', 
   *    code: 'asset code', 
   *    issuer: 'asset issuer', 
   *    amount: 'amount, number', 
   *    memo_type: 'memo type, could be: NONE TEXT HASH ID RETURN', 
   *    memo: 'memo content'
   *  }
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message',
   *            data:'result returned, object or null'
   *          }
   * Example:
   *   qlchain.pathPayment({
   *      destination: 'GBFGPA6MELXHEKWPJW75LOMC4CHGHTZ67LOWUGTUUILMXMZZGFLTO3X7', 
   *      code: 'XFF', 
   *      issuer: 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF', 
   *      amount: 100, 
   *      memo_type: 'TEXT', 
   *      memo: 'Hello,qlchain'
   *    }, function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('success')
   *        }
   *    })
   */
  pathPayment(data, callback){
    //code
  },

  /**
   * sign data to make backend application have confident that the operator has appropriate access to the account
   * @param {String} data to sign, JSON, then convert to String, which needs to keep order, otherwise verification will fail.
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message',
   *            data:'data returned, string, encoded in base64'
   *          }
   *    Example:
   *    let data = {name: 'qlchain runtime dapp'}
   *    data = JSON.stringify(data)
   *    qlchain.sign(data, function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('do success')
   *          console.log('The result after signing {name: "qlchain runtime dapp"} :'+response.data)
   *        }
   *    })
   */
  sign(data, callback){
    //code
  },

  /**
   * sign xdr for transaction
   * @param {string} data, xdr generated for transaction
   * @param {String} message
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message',
   *            data:'data returned, string, result xdr after signing it'
   *          }
   * Example:
   *   let xdr = 'AAAAAEpng8wi7nIqz02/1bmC4I5jzz763WoadKIWy7M5MVc3AAAAZACHjkkAAAABAAAAAAAAAAAAAAABAAAAAAAAAAoAAAALaG9tZV9kb21haW4AAAAAAQAAABBodHRwOi8vZmNoYWluLmlvAAAAAAAAAAA='
   *   qlchain.signXDR(xdr, function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('do success')
   *          console.log('XDR result after signing XDR :'+response.data)
   *        }
   *    })
   */
  signXDR(data, message, callback){
    // code
  },
  /**
   * canceled since 2.4
   * backup data, including contacts and address book
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message',
   *            data:'data returned, string, encrypted'
   *          }
   * Example:
   *   qlchain.backup(function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('do success')
   *          console.log('Backup data encrypted:'+response.data)
   *        }
   *    })
   */
  backup(callback){
    //code
  },

  /**
   * canceled since 2.4
   * recovery data, from data encrypted by backup function, overwrite to current runtime
   * @param {string} data 
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message'
   *          }
   * Example
   *   //notice, here is the backup data
   *   qlchain.recovery(data,function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('do success')
   *        }
   *    })
   */
  recovery(data, callback){
    //code
  },
  /**
   * Trust asset
   * @param {string} code
   * @param {string} issuer 
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message'
   *          }
   * Example:
   *   let code = 'XFF';
   *   let issuer = 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF';
   *   qlchain.trust(code,issuer,function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('do success')
   *        }
   *    })
   */
  trust(code, issuer, callback){
    //code
  }

 /**
  * Scan QR code to get result scanned.
  * Example:
  *   qlchain.scan(function(response){
  *        if(response.code === 'fail'){
  *          console.log('error:' + response.message)  
  *        }else{
  *          console.log('scan result:' + response.data)//response.data is the scanning result, string
  *        }
  *    })
  */ 
  scan(callback){
   // code
  }

  /**
   * Share, implementation detail: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-PluginShare
   * @param {Object} options
   * @param {string或function} callback
   *      callback expects an object
   *        {
   *            code:'fail or success',
   *            message:'notification message'
   *          }
   * Example:
   *   let options = {
   *      message: 'Share picture',
   *      files: ['data:image/png;base64,iVBORw0......K5CYII='], //remote picture url or data in base64 format
   *     };
   *   qlchain.share(options,function(response){
   *        if(response.code === 'fail'){
   *          console.log('error:' + response.message)  
   *        }else{
   *          console.log('share success')
   *        }
   *    })
   */
  share(options,callback){
    //code
  }

  /**
   * Open DAPP
   * @param {String} dappid of DAPP
   * 
   */
  openDApp(dappid){

  }

  /**
   * Initialize window
   * @param {Object} config
   * Example:
   * {
   *   "navigationBarBackgroundColor":"#ffffff", //String, background color of navigation bar
   *   "navigationBarTextStyle":"black or white" //String, text color of navigation bar, black or white
   *    "navigationBarTitleText":""//String, title text of navigation bar
   *    "themeStyle":""//String, theme, dark or white
   *    "navigationStyle":"" //String, Style of navigation bar, only support: default, custom, only reserve capsule button at upper right corner
   * }
   * 
   * @param {Function} callback 
   * 
   */
  initWindow(config, callback){
    //code
  };

}
```


## Ethereum DApps

  qlchain runtime v3.x currently support Ethereum and Stellar DApps.

  qlchain runtime DApp browser has the compatibility of Metamask, your DApp should naturally work with qlchain runtime if it is compatible with Metamask as well.

  The interaction between qlchain runtime DApp browser and DApp is base on [EIP1102](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md). DApp must implement `EIP1102` to get user account and send transaction.

  You can also check the related [documentation](https://github.com/MetaMask/faq/blob/09281ac3dfcc19703f25fc9c960d2b7c65a0a4b3/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check) of metamask