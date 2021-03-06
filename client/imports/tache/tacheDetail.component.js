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
var tache_service_ts_1 = require('./tache.service.ts');
var tacheDetail_component_html_1 = require('./tacheDetail.component.html');
var TacheDetailComponent = (function () {
    function TacheDetailComponent(tacheService) {
        this.tacheService = tacheService;
        this.taches = taches_ts_1.Taches.find();
    }
    TacheDetailComponent = __decorate([
        core_1.Component({
            selector: 'tacheDetailComponent',
            template: tacheDetail_component_html_1.default,
            providers: [tache_service_ts_1.TacheService]
        }), 
        __metadata('design:paramtypes', [tache_service_ts_1.TacheService])
    ], TacheDetailComponent);
    return TacheDetailComponent;
}());
exports.TacheDetailComponent = TacheDetailComponent;
//# sourceMappingURL=tacheDetail.component.js.map