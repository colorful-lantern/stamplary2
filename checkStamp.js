// 非暗号化する関数
function decryptText(text) {
    var encryptedText = text;
    var password = "password";

    // 暗号化されたテキストを復号化
    var decrypted = CryptoJS.AES.decrypt(encryptedText, password);

    // 復号化されたデータを文字列に変換
    var originalText = decrypted.toString(CryptoJS.enc.Utf8);

    return originalText;
}