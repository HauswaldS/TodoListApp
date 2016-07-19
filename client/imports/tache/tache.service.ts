import { Injectable } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { Taches } from '../../../collections/taches.ts';

@Injectable()
export class TacheService {

    taches: Mongo.Collection<Tache>;

  constructor(){
    this.taches = Taches;
  }

  addTache(tache){
    this.taches.insert(tache);
  }

}
