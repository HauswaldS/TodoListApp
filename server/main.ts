import {loadUsers} from './loadUsers.ts';
import {Meteor} from 'meteor/meteor';
 
Meteor.startup(loadUsers);