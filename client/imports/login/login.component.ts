import {
    Component,
    OnInit} from '@angular/core';
import {
    FormBuilder,
    ControlGroup,
    Validators,
    Control} from '@angular/common';
import { Router } from '@angular/router';
import {AuthentificationService} from '../authentification/authentification.service.ts';
import {Users}from '../../../collections/users.ts';

import template from './login.component.html';


@Component({
    selector: 'login',
    template,
    providers: [AuthentificationService]
})
export class LoginComponent implements OnInit {

    users: Mongo.Cursor<User>;
    errorMsg: string;
    loginForm: ControlGroup;

    constructor(
        private authService: AuthentificationService,
        private router: Router
    ) {
        let fb = new FormBuilder();

        this.loginForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.users = Users.find();
    }

    ngOnInit(){
        if(localStorage.getItem('token') !== null){
            this.router.navigate(['/dashboard']);
        }
    }

    connectUser(userInfo) {
        if (!this.authService.login(userInfo)) {
            return this.errorMsg = 'Email or Password are incorrect';
        }
    }

}
