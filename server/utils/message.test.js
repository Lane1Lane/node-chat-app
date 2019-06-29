const expect = require('expect');

var {generateMessage} = require('./message');

var testMessage = {
    from: 'Andrew',
    text: 'Hi! It is Andrew'
};
var newMessage = generateMessage(testMessage.from, testMessage.text);

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        

        expect(newMessage.text).toBe(testMessage.text);
        expect(newMessage.from).toBe(testMessage.from);
        expect(typeof newMessage.createdAt).toBe('number');
    });
});