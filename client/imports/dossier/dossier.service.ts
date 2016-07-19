import { Injectable } from '@angular/core';
import { Dossiers } from '../../../collections/dossiers.ts';
import { UserService } from '../user/user.service.ts';
import { Mongo } from 'meteor/mongo';

@Injectable()
export class DossierService {

    dossiers: Mongo.Collection<Dossier>;
    userDossiers: Array<Dossier>;

    constructor(
        private userService: UserService
    ) {
        this.dossiers = Dossiers;
    }

    addDossier(dossier) {
        Dossiers.insert(dossier);
    }
    getUserDossier(userId) {
        this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
        if (this.userDossiers.length === 0) {
            this.dossierInit(userId);
            this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();

        }
        this.userService.updateUserDossiers(this.userDossiers, userId);
        return this.userDossiers;
    }
    dossierInit(userId) {
        Dossiers.insert({ 'title': 'Boite de réception', 'description': "Default dossier", "ownerId": userId });
    }

}
