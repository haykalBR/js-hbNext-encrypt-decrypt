const internal = require('./internal/encryption');
module.exports = (options) => {
    const opt = options;
    if (!opt) throw Error('You have to specify options for encryption module');
    if (!opt.encryptionKey) throw Error('You have to specify encryption key');
    return {
        options,
        encrypt: (text) => {
            return internal.encrypt(text, options.encryptionKey);
        },
        decrypt: (encText) => {
            return internal.decrypt(encText, options.encryptionKey);
        },
    };
}