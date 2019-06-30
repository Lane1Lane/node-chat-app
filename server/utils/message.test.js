const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

var testMessage = {
    from: 'Andrew',
    text: 'Hi! It is Andrew',
    lat: 1,
    long: 1
};



describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var newMessage = generateMessage(testMessage.from, testMessage.text);
        expect(newMessage.text).toBe(testMessage.text);
        expect(newMessage.from).toBe(testMessage.from);
        expect(typeof newMessage.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {  
        var newLocationMessage = generateLocationMessage(testMessage.from, testMessage.lat, testMessage.long)     
        expect(newLocationMessage.from).toBe(testMessage.from);
        expect(newLocationMessage.url).toBe(`https://www.google.com/maps?q=${testMessage.lat},${testMessage.long}`)
        expect(typeof newLocationMessage.createdAt).toBe('number');
    });
});