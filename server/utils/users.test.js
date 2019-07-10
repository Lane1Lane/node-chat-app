const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('Should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = users.users[0].id;
        var removedUser = users.removeUser(userId);
        expect(removedUser.id).toBe(userId);
        expect(users.users).not.toContain(removedUser);
    });

    it('should not remove a user', () => {
        var removedUser = users.removeUser('123456');
        expect(removedUser).toBeNull;
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var user = users.getUser(users.users[1].id);
        expect(user).toEqual(users.users[1]);
    });

    it('should not find a user', () => {
        var user = users.getUser('12312321');
        expect(user).not.toBeTruthy();
    });

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });
});