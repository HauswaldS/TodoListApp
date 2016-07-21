import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import {Mongo} from 'meteor/mongo';
import {RouterConfig, provideRouter, ROUTER_DIRECTIVES} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './imports/login/login.component.ts';
import { DashboardComponent } from './imports/dashboard/dashboard.component.ts';


import template from './app.component.html';


@Component({
  selector: 'appComponent',
  template,
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {


  constructor() {

  }
}
//Router Logic

const routes:RouterConfig = [
{
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
},
{
    path:'login',
    component: LoginComponent
},
{
path:'dashboard',
component: DashboardComponent
}

]

const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]

//Boot Logic

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
