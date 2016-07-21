import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service.ts';

import template from './profilDetail.component.html';


@Component({
  selector:'profilDetailComponent',
  template,
  providers:[UserService]
})
export class ProfilDetailComponent implements OnInit {

  user: User;
  userId: string;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(){
    this.userId = localStorage.getItem('token');
    this.user = this.userService.getUser(this.userId);
    console.log(this.user);
  }

}
