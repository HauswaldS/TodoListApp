import { Component } from '@angular/core';
import { Taches } from '../../../collections/taches.ts';
import { TacheService } from './tache.service.ts';

import template from './tacheDetail.component.html';

@Component({
  selector:'tacheDetailComponent',
  template,
  providers:[TacheService]
})
export class TacheDetailComponent {

  taches: Mongo.Cursor<Tache>

constructor(
  private tacheService: TacheService
) {
  this.taches = Taches.find();
}

  add(tache){
    this.tacheService.addTache(tache);
  }

}
