// class Person {
//     constructor (name, age) {
//         this.name = name,
//         this.age = age
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// };

// var me = new Person('Andrew','35');

// var description = me.getUserDescription();

// console.log(description);

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        // return user that was removed
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        };

        return user;
    }
    getUser (id) {
        var user = this.users.filter((user) => user.id === id)[0];
        return user;
    }
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var usersNames = users.map((user) => user.name);
        return usersNames;
    }
    getRoomList () {
        var roomListNames = this.users.map((user) => user.room);
        var roomList = roomListNames.filter((room, pos) => roomListNames.indexOf(room) === pos);
        return roomList;
    }
};

module.exports = {Users};