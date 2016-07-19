import { Component, OnInit } from '@angular/core';
import { DossierService } from './dossier.service.ts';
import { Dossiers } from '../../../collections/dossiers.ts';

import template from './dossierDetail.component.html';

@Component({
selector:'dossierDetailComponent',
template,
providers:[DossierService]
})
export class DossierDetailComponent implements OnInit {

  dossiers: Mongo.Cursor<Dossier>;
  userId: string;

  constructor(
    private dossierService: DossierService
  ) {
    this.dossiers = Dossiers.find();
    this.userId = localStorage.getItem('token');
  }

  ngOnInit(){
    this.dossierService.getUserDossier(this.userId);
  }

  add(dossier){
    dossier.ownerId = this.userId;
    this.dossierService.addDossier(dossier);
  }

}
