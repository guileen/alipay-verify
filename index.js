var crypto = require('crypto')

exports.verify = function(params, alipayPubKey) {
  var paramsToSign = []
  // remove sign && sign_type
  for(var name in params) {
    if(name != 'sign' && name != 'sign_type') {
      paramsToSign.push(name + '=' + params[name])
    }
  }
  paramsToSign.sort()
  var prestr = paramsToSign.join('&')
  prestr = unescape(encodeURIComponent(prestr)) // force convert to utf8
  if(params.sign_type == 'RSA') {
    return crypto.createVerify('RSA-SHA1')
      .update(prestr)
      .verify(alipayPubKey, params.sign, 'base64')
  } else {
    return true
  }
}
