import { Users } from '../collections/users.ts';

export function loadUsers() {
  if (Users.find().count() === 0) {

    let user = [
      {
  "_id" : "6XPZFwGLAPzX8xGWP",
  "status" : "user",
  "name" : "Axel",
  "surname" : "Le Borgne",
  "pseudo" : "Hauswald",
  "password" : "password",
  "email" : "lbaxel95@gmail.com",
  "pictureSrc":'http://a1.mzstatic.com/us/r30/Purple4/v4/5a/4a/3e/5a4a3e86-908e-dc87-dec8-68e995caa24e/icon175x175.png'}
    ];

    for (let i = 0; i < user.length; i++) {
      Users.insert(user[i]);
    }
  }
}
