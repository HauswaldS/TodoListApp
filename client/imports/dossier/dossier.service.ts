import { Injectable } from '@angular/core';
import { TacheService } from '../tache/tache.service.ts';
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

    getUserDossierOnInit(userId) {
        this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
        if (this.userDossiers.length === 0) {
            Dossiers.insert({ 'title': 'Boite de réception', 'description': "Default dossier", "ownerId": userId, 'status':false });            this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
            this.userService.updateUserDossiers(this.userDossiers, userId);
        }
        return this.userDossiers;
    }

    //Ajoute/update les taches d'un dossier dans la db 'dossier'
    addTachesToDossier(tachesToAdd, dossierId) {
        this.dossiers.update(
            {_id: dossierId},
            {
                $set:{ taches: tachesToAdd}
            }
        )
    }

    //Get tous les dossiers d'un utilisateur dans la db 'dossier'
    updateDossiers(userId){
        let userDossiers = this.dossiers.find({ownerId: userId}).fetch();
        this.userService.updateUserDossiers(userDossiers, userId);
        return userDossiers;
    }

    //Ajoute un dossier à la db 'dossier'
    addDossier(title:string, description:string, userId:string){
        this.dossiers.insert({'title': title, 'description': description, ownerId: userId, 'status':false});
    }

    //Met à la jour le status des dossier (flase:off, true:on);
    updateDossierStatus(dossierId, dossierStatus){
        this.dossiers.update(
            {_id: dossierId},
            {
                $set:{ status: dossierStatus}
            }
        )
    }

    deleteUserDossier(dossierId:string){
        this.dossiers.remove({_id:dossierId});
    }

}
