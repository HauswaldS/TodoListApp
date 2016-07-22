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
    //Ajoute une tache à la db 'tache' et update le dossier correspondant dans la db 'dossier'
    TacheService.prototype.addTache = function (tache, ownerId) {
        this.taches.insert({
            description: tache,
            dossierId: ownerId
        });
        //Collecte les taches correspondante au dossier après avoir ajouté la tache à la db 'tache'
        var dossierTaches = this.findDossierTaches(ownerId);
        //Met à jour le dossier correspondant dans la db 'dossier'
        this.dossierService.addTachesToDossier(dossierTaches, ownerId);
    };
    //Collecte les taches qui possède l'id d'un dossier spécifique
    TacheService.prototype.findDossierTaches = function (ownerId) {
        return this.taches.find({ dossierId: ownerId }).fetch();
    };
    TacheService.prototype.deleteDossierTaches = function (id) {
        var taches = this.taches.find({ dossierId: id }).fetch();
        for (var _i = 0, taches_1 = taches; _i < taches_1.length; _i++) {
            var tache = taches_1[_i];
            this.taches.remove({ '_id': tache._id });
        }
    };
    TacheService.prototype.deleteSingleTache = function (id) {
        this.taches.remove({ '_id': id });
    };
    TacheService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [dossier_service_ts_1.DossierService])
    ], TacheService);
    return TacheService;
}());
exports.TacheService = TacheService;
//# sourceMappingURL=tache.service.js.map