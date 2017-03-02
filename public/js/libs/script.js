function AES_encrypt(strData){
	var keyStr = "FANWE5LMUQC43P2P";
	var key = CryptoJS.enc.Utf8.parse(keyStr);
	var encryptedData = CryptoJS.AES.encrypt(strData, key, {
		mode:CryptoJS.mode.ECB,
		padding:CryptoJS.pad.Pkcs7
	});
	var encryptedBase64Str = encryptedData.toString();
	return encryptedBase64Str;
}

function AES_decrypt(encryptedStr){
	var keyStr = "FANWE5LMUQC43P2P";
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
