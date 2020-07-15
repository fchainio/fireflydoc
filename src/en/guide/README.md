## Introduction

qlchain runtime is a decentralized runtime based on Stellar network, which supports Android, iOS and desktop platform.

qlchain runtime provides "bring your own DAPP" mode, which enables developers to create their own DAPP. After registering on qlchain platform and publishing DAPP to qlchain runtime, your DAPP is ready for end users.

DAPP in qlchain runtime is using webview. Leveraging JS Bridge provided runtime, DAPP can interact with runtime in many ways, like: getting runtime version, getting public key of current user or starting a payment, etc.


## Quick Start

### a new example.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>qlchain Demo</title>
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

### open qlchain runtime - discovery page, add accessable address, then you may open your DAPP now.

### Enjoy!
