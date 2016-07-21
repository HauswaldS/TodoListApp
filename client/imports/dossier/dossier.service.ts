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

    getUserDossierOnInit(userId) {
        this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
        if (this.userDossiers.length === 0) {
            Dossiers.insert({ 'title': 'Boite de réception', 'description': "Default dossier", "ownerId": userId, 'status':false });            this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
            this.userService.updateUserDossiers(this.userDossiers, userId);
        }
        return this.userDossiers;
    }

    updateDossierTaches(tachesToAdd, dossierId) {
        this.dossiers.update(
            {_id: dossierId},
            {
                $set:{ taches: tachesToAdd}
            }
        )
    }

    updateUserDossiers(userId){
        return this.dossiers.find({ownerId: userId}).fetch();
    }

    addDossier(title:string, description:string, userId:string){
        this.dossiers.insert({'title': title, 'description': description, ownerId: userId, 'status':false});
    }

    updateDossierStatus(dossierId, dossierStatus){
        this.dossiers.update(
            {_id: dossierId},
            {
                $set:{ status: dossierStatus}
            }
        )
    }

}
