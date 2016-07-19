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
var users_ts_1 = require('../../../collections/users.ts');
var router_1 = require('@angular/router');
var AuthentificationService = (function () {
    function AuthentificationService(router) {
        this.router = router;
        this.users = users_ts_1.Users;
        this.token = localStorage.getItem('token');
    }
    AuthentificationService.prototype.login = function (user) {
        var authUser = this.users.find({ email: user.email }).fetch();
        if (authUser.length > 0 && authUser[0].password === user.password) {
            this.token = authUser[0]._id;
            localStorage.setItem('token', this.token);
            this.router.navigate(['/dashboard']);
        }
        return false;
    };
    AuthentificationService.prototype.logout = function () {
        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        this.router.navigate(['/login']);
    };
    AuthentificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthentificationService);
    return AuthentificationService;
}());
exports.AuthentificationService = AuthentificationService;
//# sourceMappingURL=authentification.service.js.map