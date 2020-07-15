---
home: true
actionText: Start →
actionLink: /en/guide/
footer: MIT Licensed | Copyright © 2020-present
---

## Introduction

qlchain v2.x provides third party DAPP interface to enable developers to create their own DAPP, which brings more choices and features to end users.

qlchain v3.x supports Bitcoin, Ethereum including ERC20 token, and Stellar network. qlchain currently support Ethereum and Stellar DApps.


### Application development procedure
* DAPP is a standard webapp project, developers can make use of any related technology stack of their choices to build a project.
* There is no need to import any codes from qlchain runtime.
* After DAPP finished loading the interface for the first time, qlchain runtime will inject SDK code to current interface, current DAPP need to check if window.qlchain object exists, from which you can get corresponding address and api, etc. 
* Developers can add localhost and perform test in qlchain runtime by openning 『light application』 in qlchain runtime and clicking the icon at the top right-hand corner.