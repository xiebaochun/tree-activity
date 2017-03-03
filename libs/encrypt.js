// var aes = require('./aes.js');
// var CryptoJS = aes.CryptoJS;

var CryptoJS = require("crypto-js");

function AES_encrypt(strData){
	var keyStr = "JRUEUJROT9872JHH";
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	var encryptedData = CryptoJS.AES.encrypt(strData, key, {
		mode:CryptoJS.mode.ECB,
		padding:CryptoJS.pad.Pkcs7
	});
	console.log(key);
	var encryptedBase64Str = encryptedData.toString();
	return encryptedBase64Str;
}

function AES_decrypt(encryptedStr){
	var keyStr = "JRUEUJROT9872JHH";
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	//var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedStr);
	//var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr); 
	var decryptedData = CryptoJS.AES.decrypt(encryptedStr, key, { 
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8); 
	return decryptedStr;
}

//var MD5 = CryptoJS.MD5;

exports.AES_encrypt = AES_encrypt;

// export default {
// 	AES_encrypt,
// 	AES_decrypt,
// 	MD5
// }