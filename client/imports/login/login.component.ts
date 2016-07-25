import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent} from 'angular2-meteor';


import template from './login.component.html';

@Component({
    selector: 'dashboard',
    template,
    directives: [ROUTER_DIRECTIVES, LoginButtons]
})
export class LoginComponent extends MeteorComponent {

    dossiers: Mongo.Cursor<Dossier>;

    constructor(
        private router: Router,
        private ngZone: NgZone
    ) {
        super();
    }

    ngOnInit() {
        // this.subscribe('dossiers', ()=>{
        //   this.dossiers = Dossiers.find();
        //   console.log(this.dossiers);
        // }, true);
    }

}
