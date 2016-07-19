import { Injectable } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Users } from '../../../collections/users.ts';

@Injectable()
export class UserService {

  users: Mongo.Collection<User>

  constructor(){
    this.users = Users;
  }

  getUser(userId){
    let user = this.users.findOne(userId);
    localStorage.setItem('User', JSON.stringify(user));
  }

  updateUserDossiers(dossiers, userId){
    console.log(dossiers);
    this.users.update({_id:userId},
    {
      $set: {dossiers: dossiers}
    })
    console.log("Update completed");
  }

}
