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
var taches_ts_1 = require('../../../collections/taches.ts');
var dossier_service_ts_1 = require('../dossier/dossier.service.ts');
var TacheService = (function () {
    function TacheService(dossierService) {
        this.dossierService = dossierService;
        this.taches = taches_ts_1.Taches;
    }
    TacheService.prototype.addTache = function (tache, ownerId) {
        this.taches.insert({
            description: tache,
            dossierId: ownerId
        });
        var dossierTaches = this.findDossierTaches(ownerId);
        this.dossierService.updateDossierTaches(dossierTaches, ownerId);
    };
    TacheService.prototype.findDossierTaches = function (ownerId) {
        return this.taches.find({ dossierId: ownerId }).fetch();
    };
    TacheService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [dossier_service_ts_1.DossierService])
    ], TacheService);
    return TacheService;
}());
exports.TacheService = TacheService;
//# sourceMappingURL=tache.service.js.map