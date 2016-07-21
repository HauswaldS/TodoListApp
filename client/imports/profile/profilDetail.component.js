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
var user_service_ts_1 = require('../user/user.service.ts');
var profilDetail_component_html_1 = require('./profilDetail.component.html');
var ProfilDetailComponent = (function () {
    function ProfilDetailComponent(userService) {
        this.userService = userService;
    }
    ProfilDetailComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('token');
        this.user = this.userService.getUser(this.userId);
        console.log(this.user);
    };
    ProfilDetailComponent = __decorate([
        core_1.Component({
            selector: 'profilDetailComponent',
            template: profilDetail_component_html_1.default,
            providers: [user_service_ts_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_ts_1.UserService])
    ], ProfilDetailComponent);
    return ProfilDetailComponent;
}());
exports.ProfilDetailComponent = ProfilDetailComponent;
//# sourceMappingURL=profilDetail.component.js.map