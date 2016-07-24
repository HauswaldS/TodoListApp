"use strict";
var users_ts_1 = require('../collections/users.ts');
function loadUsers() {
    if (users_ts_1.Users.find().count() === 0) {
        var user = [
            {
                "_id": "6XPZFwGLAPzX8xGWP",
                "status": "user",
                "name": "Axel",
                "surname": "Le Borgne",
                "pseudo": "Hauswald",
                "password": "password",
                "email": "lbaxel95@gmail.com",
                "pictureSrc": 'http://a1.mzstatic.com/us/r30/Purple4/v4/5a/4a/3e/5a4a3e86-908e-dc87-dec8-68e995caa24e/icon175x175.png' }
        ];
        for (var i = 0; i < user.length; i++) {
            users_ts_1.Users.insert(user[i]);
        }
    }
}
exports.loadUsers = loadUsers;
//# sourceMappingURL=loadUsers.js.map