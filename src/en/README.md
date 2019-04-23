---
home: true
actionText: Start →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2019-present fchain.io
---

## Introduction

Firefly wallet is a decentralized wallet based on Stellar network, which supports Android, iOS and desktop platform.
Firefly wallet(1.x-2.1.x) is an open source project using MIT protocol, which is not allowed to be used in any commercial activities, you can get the source code from [github](https://github.com/fchainio/firefly)

Firefly wallet v2.x provides third party DAPP interface to enable developers to create their own DAPP, which brings more choices and features to end users.



### Application development procedure
* DAPP is a standard webapp project, developers can make use of any related technology stack of their choices to build a project.
* There is no need to import any codes from Firefly wallet.
* After DAPP finished loading the interface for the first time, Firefly wallet will inject SDK code to current interface, current DAPP need to check if window.FFW object exists, from which you can get corresponding address and api, etc. 
* Developers can add localhost and perform test in Firefly wallet by openning 『light application』 in Firefly wallet and clicking the icon at the top right-hand corner.
* Developers can also choose to use android or iOS simulator to perform test after downloading and compiling [Firefly wallet source code](https://github.com/fchainio/firefly).
