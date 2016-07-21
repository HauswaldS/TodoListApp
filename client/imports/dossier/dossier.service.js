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
var dossiers_ts_1 = require('../../../collections/dossiers.ts');
var user_service_ts_1 = require('../user/user.service.ts');
var DossierService = (function () {
    function DossierService(userService) {
        this.userService = userService;
        this.dossiers = dossiers_ts_1.Dossiers;
    }
    DossierService.prototype.getUserDossierOnInit = function (userId) {
        this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
        if (this.userDossiers.length === 0) {
            dossiers_ts_1.Dossiers.insert({ 'title': 'Boite de réception', 'description': "Default dossier", "ownerId": userId, 'status': false });
            this.userDossiers = this.dossiers.find({ "ownerId": userId }).fetch();
            this.userService.updateUserDossiers(this.userDossiers, userId);
        }
        return this.userDossiers;
    };
    DossierService.prototype.updateDossierTaches = function (tachesToAdd, dossierId) {
        this.dossiers.update({ _id: dossierId }, {
            $set: { taches: tachesToAdd }
        });
    };
    DossierService.prototype.updateUserDossiers = function (userId) {
        return this.dossiers.find({ ownerId: userId }).fetch();
    };
    DossierService.prototype.addDossier = function (title, description, userId) {
        this.dossiers.insert({ 'title': title, 'description': description, ownerId: userId, 'status': false });
    };
    DossierService.prototype.updateDossierStatus = function (dossierId, dossierStatus) {
        this.dossiers.update({ _id: dossierId }, {
            $set: { status: dossierStatus }
        });
    };
    DossierService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_ts_1.UserService])
    ], DossierService);
    return DossierService;
}());
exports.DossierService = DossierService;
//# sourceMappingURL=dossier.service.js.map