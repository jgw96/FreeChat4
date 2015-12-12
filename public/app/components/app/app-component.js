var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var items_component_1 = require('../items/items-component');
var login_component_1 = require("../login/login-component");
var room_component_1 = require("../room/room-component");
var news_component_1 = require("../news/news-component");
var settings_component_1 = require("../settings/settings-component");
var firefoxos_component_1 = require("../firefoxOS/firefoxos-component");
var sports_component_1 = require("../sports/sports-component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: "<router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.RouteConfig([
            { path: '/Items', as: 'Items', component: items_component_1.ItemsComponent },
            { path: "/", as: "Login", component: login_component_1.LoginComponent },
            { path: "/Rooms", as: "Rooms", component: room_component_1.RoomComponent },
            { path: "/News", as: "News", component: news_component_1.NewsComponent },
            { path: "/Settings", as: "Settings", component: settings_component_1.SettingsComponent },
            { path: "/FirefoxOS", as: "FirefoxOS", component: firefoxos_component_1.FirefoxOSComponent },
            { path: "/Sports", as: "Sports", component: sports_component_1.SportsComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-component.js.map