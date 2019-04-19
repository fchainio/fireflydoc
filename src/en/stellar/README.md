## Stellar 101

[Official site](https://stellar.org)
[Chinese](https://docs.stellarcn.org)

## Address

**Address format**
`ED25519` algorithm is used to generate public and private key pair in Stellar. The Address is the `Public Key` encoded in `Base32`. The encoded format is [StrKey](https://github.com/stellar/stellar-core/blob/master/src/crypto/StrKey.cpp), according to which, the length of both address and secret seed(after being encoded) are all 56 characters, values range from [A-Z],[2-7], not case sensitive or all capital. Stellar Address starts with G, secret seed starts with S.
**Activation**
Different from BTC, it is the account model not the UTXO model which Stellar leveraged. It obviously referred to modern banking industry when designed, activating an address is like an account opening action. So you cannot use the address/secret seed the moment you got them generated. You have to send 1 XLM to this newly generated address to finish the creation action, by using `createAccount` operation.
Nodes in Stellar network employs Postgres dbms to store world status. `createAccount` will create record about the newly generated address in database.


## XLM

The native asset of Stellar network is called Lumens(Optical unit), [ab. XLM](https://zh.wikipedia.org/wiki/ISO_4217#以X开头的货币代码).
The least amount one address to hold is 1 XLM, which means your address is activated.
0.5 XLM(deposit) will be frozen for every record occupied in database, which will be return when record got deleted. The operation user initiated will fail if user don't have enough XLM reserved for freeze.
Lots operations will lead to freeze, like trust, offer and manageData, etc. Ref[Transaction section](#Transaction)

## Asset

You can issue asset on Stellar network.
The unique way to identify an asset is by asset code AND asset issuer.
Asset code should be alphanumeric, whose length should be 1-12 characters, case sensitive, like 'XFF'. The issuer is standard Stellar address.
It could be natively supported asset on Stellar, like XFF. Also it can target external assets, like fiat money, or cypto currency. Anchors are entities that people trust to hold their deposits and issue credits into the Stellar network for those deposits.
As mentioned above, 0.5 XLM will be frozen for each asset one user trust.

Take XFF for example. Then xff object is the asset object in Stellar network.

```
var xff = new StellarSdk.Asset(
  'XFF', 'GAZEX2USUBMMWFRZFS77VDJYXUFLXI4ZGFPWX6TBNZCSTEQWNLFZMXFF');
```

## Transaction

Like traditional transaction concept in database, transaction exists in Stellar, which contains multiple operations.
Operation is the action defined in Stellar whose effect would change ledger status, like createAccount, payment and offer, etc.
There can be 100 operations in one transaction at most. You can achieve a lot with combined operations. Transaction is atomic, like if one operation can not complete, the whole transaction will revoke.


## SDK

There are SDKs of multiple languages on Stellar, like[Javascript](https://www.stellar.org/developers/js-stellar-sdk/reference/), [PHP](https://github.com/zulucrypto/stellar-api), [Java](https://github.com/stellar/java-stellar-sdk), [GO](https://github.com/stellar/go), [Python](https://github.com/StellarCN/py-stellar-base), etc.

You may take advantage of these SDKs to finish signing, paying assets or checking balance operations, etc.

## Block Explorer

There are two block explorers we recommend, https://steexp.com and https://stellar.expert

