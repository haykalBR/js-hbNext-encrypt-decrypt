const {
    Md5
} = require('md5-typescript');
module.exports = {
    encrypt: (text, key) => {
        key = Md5.init(key);
        let buff = Buffer.from(text + key);
        let base64data = buff.toString('base64');
        return base64data;
    },
    decrypt: (enc, key) => {
        key = Md5.init(key);
        return Buffer.from(enc, 'base64').toString('utf-8').replace(key, '');
    },
};