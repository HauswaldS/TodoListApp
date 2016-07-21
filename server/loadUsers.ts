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
  "email" : "lbaxel95@gmail.com"
}
    ];

    for (let i = 0; i < user.length; i++) {
      Users.insert(user[i]);
    }
  }
}
