import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { AuthentificationService } from '../authentification/authentification.service.ts';
import { Users } from '../../../collections/users.ts'
import { Tracker } from 'meteor/tracker';
import { UserService } from '../user/user.service.ts';
import { TacheDetailComponent } from '../tache/tacheDetail.component.ts';
import { TacheService} from '../tache/tache.service.ts';
import { DossierDetailComponent }  from '../dossier/dossierDetail.component.ts';
import { DossierService } from '../dossier/dossier.service.ts';
import { ProfilDetailComponent } from '../profile/profilDetail.component.ts';

import template from './dashboard.component.html';

@Component({
    selector: 'dashboard',
    template,
    directives: [TacheDetailComponent, DossierDetailComponent, ProfilDetailComponent, ROUTER_DIRECTIVES],
    providers: [AuthentificationService, TacheService, DossierService, UserService]
})
export class DashboardComponent implements OnInit {

    userId: string;
    user: User;
    userDossiers: Array<Dossier>;
    userMainDossierId: string;
    tacheDetail: boolean;
    dossierDetail: boolean;
    profilDetail: boolean;

    constructor(
        private authService: AuthentificationService,
        private tacheService: TacheService,
        private dossierService: DossierService,
        private userService: UserService,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.userId = localStorage.getItem('token');
        this.tacheDetail = false;
        this.dossierDetail = false;
        this.profilDetail = true;
    }

    ngOnInit() {
        this.user = this.userService.getUser(this.userId);
        if (this.user === undefined) {
            this.authService.logout();
        }
        else {
            this.userDossiers = this.dossierService.getUserDossierOnInit(this.userId);
            this.userMainDossierId = this.userDossiers[0]._id;
        }
    }

    quickTache(tache) {
        if (tache !== '') {
            //Ajoute la tache à la base de données dans 'tache' et rajoute la tache au dossier correspondant (Boite de récéption)
            this.tacheService.addTache(tache, this.userMainDossierId);
            //Récupère les dossiers correspondant à l'utilisateur
            this.userDossiers = this.dossierService.updateDossiers(this.userId);
        }
    }

    createDossier(title: string, description: string) {
        if (title !== '' && description !== '') {
            //Ajoute le dossier à la db 'dossier'
            this.dossierService.addDossier(title, description, this.userId);
            //Récupère les dossiers correspondant à l'utilisateur et update
            this.userDossiers = this.dossierService.updateDossiers(this.userId);
        }
    }

    addTacheToDossier(tache, dossierId) {
        if (tache !== '') {
            this.tacheService.addTache(tache, dossierId);
            this.userDossiers = this.dossierService.updateDossiers(this.userId);
        }
    }

    dossierToggle(dossier) {
        this.dossierService.updateDossierStatus(dossier._id, !dossier.status)
        return dossier.status = !dossier.status;
    }

    logout() {
        this.authService.logout();
    }

    deleteUserDossier(dossierId) {
        this.dossierService.deleteUserDossier(dossierId);
        this.tacheService.deleteDossierTaches(dossierId);
        this.userDossiers = this.dossierService.updateDossiers(this.userId);
    }

}
