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
var profilDetail_component_ts_1 = require('../profile/profilDetail.component.ts');
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
        this.tacheDetail = false;
        this.dossierDetail = false;
        this.profilDetail = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser(this.userId);
        if (this.user === undefined) {
            this.authService.logout();
        }
        else {
            this.userDossiers = this.dossierService.getUserDossierOnInit(this.userId);
            this.userMainDossierId = this.userDossiers[0]._id;
        }
    };
    DashboardComponent.prototype.quickTache = function (tache) {
        if (tache !== '') {
            this.tacheService.addTache(tache, this.userMainDossierId);
            this.userDossiers = this.dossierService.updateUserDossiers(this.userId);
            this.userService.updateUserDossiers(this.userDossiers, this.userId);
        }
    };
    DashboardComponent.prototype.createDossier = function (title, description) {
        if (title !== '' && description !== '') {
            this.dossierService.addDossier(title, description, this.userId);
            this.userDossiers = this.dossierService.updateUserDossiers(this.userId);
            this.userService.updateUserDossiers(this.userDossiers, this.userId);
        }
    };
    DashboardComponent.prototype.addTacheToDossier = function (tache, dossierId) {
        if (tache !== '') {
            this.tacheService.addTache(tache, dossierId);
            this.userDossiers = this.dossierService.updateUserDossiers(this.userId);
            this.userService.updateUserDossiers(this.userDossiers, this.userId);
        }
    };
    DashboardComponent.prototype.dossierToggle = function (dossier) {
        this.dossierService.updateDossierStatus(dossier._id, !dossier.status);
        return dossier.status = !dossier.status;
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardComponent.prototype.deleteUserDossier = function (dossierId) {
        this.dossierService.deleteUserDossier(dossierId);
        this.tacheService.deleteDossierTaches(dossierId);
        this.userDossiers = this.dossierService.updateUserDossiers(this.userId);
        this.userService.updateUserDossiers(this.userDossiers, this.userId);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: dashboard_component_html_1.default,
            directives: [tacheDetail_component_ts_1.TacheDetailComponent, dossierDetail_component_ts_1.DossierDetailComponent, profilDetail_component_ts_1.ProfilDetailComponent],
            providers: [authentification_service_ts_1.AuthentificationService, tache_service_ts_1.TacheService, dossier_service_ts_1.DossierService, user_service_ts_1.UserService]
        }), 
        __metadata('design:paramtypes', [authentification_service_ts_1.AuthentificationService, tache_service_ts_1.TacheService, dossier_service_ts_1.DossierService, user_service_ts_1.UserService, router_1.Router, core_1.NgZone])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map