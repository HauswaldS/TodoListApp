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

//Ajoute une tache à la db 'tache' et update le dossier correspondant dans la db 'dossier'
  addTache(tache:string, ownerId){
    this.taches.insert({
      description:tache,
      dossierId: ownerId
    });
    //Collecte les taches correspondante au dossier après avoir ajouté la tache à la db 'tache'
    let dossierTaches = this.findDossierTaches(ownerId);
    //Met à jour le dossier correspondant dans la db 'dossier'
    this.dossierService.addTachesToDossier(dossierTaches, ownerId);
  }

  //Collecte les taches qui possède l'id d'un dossier spécifique
  findDossierTaches(ownerId){
    return this.taches.find({dossierId: ownerId}).fetch();
  }

  deleteDossierTaches(id){
    let taches = this.taches.find({dossierId:id}).fetch();
    for(let tache of taches){
      this.taches.remove({'_id':tache._id});
    }
  }

  deleteSingleTache(id){
    this.taches.remove({'_id':id});
  }

}
