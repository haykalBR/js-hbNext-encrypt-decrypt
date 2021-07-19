const { expect } = require('chai');
const assert = require('assert');
const encryptionModule = require('../index');
const encryption = encryptionModule({ encryptionKey: 'haikel' });
describe('Encryption Module Tests', () => {
    describe('Constructor', () => {
        it('Can find internal module', () => {
            expect(encryption).to.exist;
        });
        it('Rejects if there are no options specified', () => {
            expect(encryptionModule.bind(encryptionModule)).to.throw('You have to specify options for encryption module');
        });
        it('Rejects if there is no encryption Key', () => {
            expect(encryptionModule.bind(encryptionModule, {})).to.throw('You have to specify encryption key');
        });
        it('Is able to initialize without iterationsCount specified', () => {
            const enc = encryptionModule({
                encryptionKey: 'haikel',

            });
            expect(enc).to.not.throw;
        });
    });
    describe('encrypt methode ', () => {
        it('Can encrypt Simple string', () => {
            assert.equal(
                encryption.encrypt('string'),
                'c3RyaW5nMzQ3YWFlOGMwODJjNzc3ZTg0MzE1MGY1ZTA5Mjc4MzE=',
            );
        });
        it('Can encrypt Complex string', () => {
            assert.equal(
                encryption.encrypt('stringèé@[)"ç-è581368'),
                'c3RyaW5nw6jDqUBbKSLDpy3DqDU4MTM2ODM0N2FhZThjMDgyYzc3N2U4NDMxNTBmNWUwOTI3ODMx',
            );
        });

    });
    describe('decrypt methode ', () => {
        it('Can decrypt Simple string', () => {
            assert.equal(
                encryption.decrypt('c3RyaW5nMzQ3YWFlOGMwODJjNzc3ZTg0MzE1MGY1ZTA5Mjc4MzE='),
                'string',
            );
        });
        it('Can decrypt Complex string', () => {
            assert.equal(
                encryption.decrypt('c3RyaW5nw6jDqUBbKSLDpy3DqDU4MTM2ODM0N2FhZThjMDgyYzc3N2U4NDMxNTBmNWUwOTI3ODMx'),
                'stringèé@[)"ç-è581368',
            );
        });

    });
});