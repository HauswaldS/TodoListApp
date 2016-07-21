import { Injectable } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Taches } from '../../../collections/taches.ts';
import { DossierService } from '../dossier/dossier.service.ts';

@Injectable()
export class TacheService {

    taches: Mongo.Collection<Tache>;

  constructor(
    private dossierService: DossierService
  ){
    this.taches = Taches;
  }

  addTache(tache:string, ownerId){
    this.taches.insert({
      description:tache,
      dossierId: ownerId
    });
    let dossierTaches = this.findDossierTaches(ownerId);
    this.dossierService.updateDossierTaches(dossierTaches, ownerId);

  }

  findDossierTaches(ownerId){
    return this.taches.find({dossierId: ownerId}).fetch();
  }

  deleteDossierTaches(id){
    let taches = this.taches.find({dossierId:id}).fetch();
    for(let tache of taches){
      this.taches.remove({'_id':tache._id});
    }
  }

}
