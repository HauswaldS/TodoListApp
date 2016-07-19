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
var dossier_service_ts_1 = require('./dossier.service.ts');
var dossiers_ts_1 = require('../../../collections/dossiers.ts');
var dossierDetail_component_html_1 = require('./dossierDetail.component.html');
var DossierDetailComponent = (function () {
    function DossierDetailComponent(dossierService) {
        this.dossierService = dossierService;
        this.dossiers = dossiers_ts_1.Dossiers.find();
        this.userId = localStorage.getItem('token');
    }
    DossierDetailComponent.prototype.ngOnInit = function () {
        this.dossierService.getUserDossier(this.userId);
    };
    DossierDetailComponent.prototype.add = function (dossier) {
        dossier.ownerId = this.userId;
        this.dossierService.addDossier(dossier);
    };
    DossierDetailComponent = __decorate([
        core_1.Component({
            selector: 'dossierDetailComponent',
            template: dossierDetail_component_html_1.default,
            providers: [dossier_service_ts_1.DossierService]
        }), 
        __metadata('design:paramtypes', [dossier_service_ts_1.DossierService])
    ], DossierDetailComponent);
    return DossierDetailComponent;
}());
exports.DossierDetailComponent = DossierDetailComponent;
//# sourceMappingURL=dossierDetail.component.js.map