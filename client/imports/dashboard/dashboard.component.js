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
var router_1 = require('@angular/router');
var authentification_service_ts_1 = require('../authentification/authentification.service.ts');
var user_service_ts_1 = require('../user/user.service.ts');
var tacheDetail_component_ts_1 = require('../tache/tacheDetail.component.ts');
var tache_service_ts_1 = require('../tache/tache.service.ts');
var dossierDetail_component_ts_1 = require('../dossier/dossierDetail.component.ts');
var dossier_service_ts_1 = require('../dossier/dossier.service.ts');
var dashboard_component_html_1 = require('./dashboard.component.html');
var DashboardComponent = (function () {
    function DashboardComponent(authService, tacheService, dossierService, userService, router, ngZone) {
        this.authService = authService;
        this.tacheService = tacheService;
        this.dossierService = dossierService;
        this.userService = userService;
        this.router = router;
        this.ngZone = ngZone;
        this.userId = localStorage.getItem('token');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') === null) {
            this.router.navigate(['/login']);
        }
        else {
            if (localStorage.getItem('User') === null) {
                this.userService.getUser(this.userId);
                this.user = JSON.parse(localStorage.getItem('User'));
            }
            else {
                console.log(localStorage.getItem('User'));
                this.user = JSON.parse(localStorage.getItem('User'));
            }
            if (this.user !== undefined) {
                this.user.dossiers = this.dossierService.getUserDossier(this.userId);
                console.log(this.user.dossiers);
            }
        }
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: dashboard_component_html_1.default,
            directives: [tacheDetail_component_ts_1.TacheDetailComponent, dossierDetail_component_ts_1.DossierDetailComponent],
            providers: [authentification_service_ts_1.AuthentificationService, tache_service_ts_1.TacheService, dossier_service_ts_1.DossierService, user_service_ts_1.UserService]
        }), 
        __metadata('design:paramtypes', [authentification_service_ts_1.AuthentificationService, tache_service_ts_1.TacheService, dossier_service_ts_1.DossierService, user_service_ts_1.UserService, router_1.Router, core_1.NgZone])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map