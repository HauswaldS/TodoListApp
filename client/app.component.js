"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var login_component_ts_1 = require('./imports/login/login.component.ts');
var dashboard_component_ts_1 = require('./imports/dashboard/dashboard.component.ts');
var profilDetail_component_ts_1 = require('./imports/profile/profilDetail.component.ts');
var app_component_html_1 = require('./app.component.html');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        DocHead.addMeta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'appComponent',
            template: app_component_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Router Logic
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_ts_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_ts_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'ProfilDetailComponent', pathMatch: 'full' },
            { path: 'ProfilDetailComponent', component: profilDetail_component_ts_1.ProfilDetailComponent }
        ]
    }
];
var APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//Boot Logic
angular2_meteor_auto_bootstrap_1.bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=app.component.js.map