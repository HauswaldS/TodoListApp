"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var tracker_1 = require('meteor/tracker');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var angular2_meteor_1 = require('angular2-meteor');
var dashboard_component_html_1 = require('./dashboard.component.html');
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(router, ngZone) {
        _super.call(this);
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.subscribe('dossiers', ()=>{
        //   this.dossiers = Dossiers.find();
        //   console.log(this.dossiers);
        // }, true);
        var _this = this;
        tracker_1.Tracker.autorun(function () {
            _this.ngZone.run(function () {
                _this.userId = Meteor.userId();
                console.log(Meteor.userId());
            });
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: dashboard_component_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES, angular2_meteor_accounts_ui_1.LoginButtons]
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.NgZone])
    ], DashboardComponent);
    return DashboardComponent;
}(angular2_meteor_1.MeteorComponent));
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map