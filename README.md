alipay-verify
=============

Verify the damn alipay notification with RSA

## 安装

```
npm install alipay-verify
```

## 使用

```
require('alipay-verify').verify(params, alipayPubkey)
```

alipayPubkey 格式
```
-----BEGIN PUBLIC KEY-----
公钥内容
-----END PUBLIC KEY-----
```
