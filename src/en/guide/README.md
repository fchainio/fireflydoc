## Introduction

Firefly wallet is a decentralized wallet based on Stellar network, which supports Android, iOS and desktop platform.

Firefly wallet provides "bring your own DAPP" mode, which enables developers to create their own DAPP. After registering on Firefly platform and publishing DAPP to Firefly wallet, your DAPP is ready for end users.

DAPP in Firefly wallet is using webview. Leveraging JS Bridge provided wallet, DAPP can interact with wallet in many ways, like: getting wallet version, getting public key of current user or starting a payment, etc.


## Quick Start

### a new example.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>FireFly Demo</title>
  </head>
  <body>
    <button id="btn" onclick="btnClick()">button</button>
    <script>
      /**code will follow below*/
    </script>
  </body>
</html>
```

### add click event`btnClick`
```
function btnClick(){
  alert('public key of current user:'+window.FFW.address);
}
```

### deploy example.html to web server(like nginx), get accessable address

### open Firefly wallet - discovery page, add accessable address, then you may open your DAPP now.

### Enjoy!
