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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var authentification_service_ts_1 = require('../authentification/authentification.service.ts');
var users_ts_1 = require('../../../collections/users.ts');
var login_component_html_1 = require('./login.component.html');
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        var fb = new common_1.FormBuilder();
        this.loginForm = fb.group({
            email: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required]
        });
        this.users = users_ts_1.Users.find();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') !== null) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.connectUser = function (userInfo) {
        if (!this.authService.login(userInfo)) {
            return this.errorMsg = 'Email or Password are incorrect';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: login_component_html_1.default,
            providers: [authentification_service_ts_1.AuthentificationService]
        }), 
        __metadata('design:paramtypes', [authentification_service_ts_1.AuthentificationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map