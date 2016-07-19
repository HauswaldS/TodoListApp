import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { AuthentificationService } from '../authentification/authentification.service.ts';
import { Users } from '../../../collections/users.ts'
import { Tracker } from 'meteor/tracker';
import { UserService } from '../user/user.service.ts';
import { TacheDetailComponent } from '../tache/tacheDetail.component.ts';
import { TacheService} from '../tache/tache.service.ts';
import { DossierDetailComponent }  from '../dossier/dossierDetail.component.ts';
import { DossierService } from '../dossier/dossier.service.ts';

import template from './dashboard.component.html';

@Component({
    selector: 'dashboard',
    template,
    directives: [TacheDetailComponent, DossierDetailComponent],
    providers: [AuthentificationService, TacheService, DossierService, UserService]
})
export class DashboardComponent implements OnInit {

    userId: string;
    user: User;
    dossier: Array<Dossier>;
    dossierList: Array<string>;

    constructor(
        private authService: AuthentificationService,
        private tacheService: TacheService,
        private dossierService: DossierService,
        private userService: UserService,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.userId = localStorage.getItem('token');
    }

    ngOnInit() {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['/login']);
        }
        else {
            if (localStorage.getItem('User') === null) {
                 this.userService.getUser(this.userId);
                 this.user = JSON.parse(localStorage.getItem('User'))
            }
            else {
                console.log(localStorage.getItem('User'));
                this.user = JSON.parse(localStorage.getItem('User'))
            }
            if (this.user !== undefined) {
                this.user.dossiers = this.dossierService.getUserDossier(this.userId);
                console.log(this.user.dossiers);
                }
            }
        }

    logout() {
        this.authService.logout();
    }




}
