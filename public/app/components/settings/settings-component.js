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
var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.routerOnActivate = function (next, prev) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeInLeft");
        document.querySelector("#testTwo").classList.add("fadeInLeft");
    };
    SettingsComponent.prototype.clearMessages = function () {
        localStorage.removeItem("localforage/messages");
        localStorage.removeItem("localforage/newsMessages");
        localStorage.removeItem("localforage/firefoxOSMessages");
        new Notification("Messages cleared");
    };
    SettingsComponent.prototype.darkTheme = function () {
        document.querySelector("body").style.backgroundColor = "black";
    };
    SettingsComponent.prototype.defaultTheme = function () {
        document.querySelector("body").style.backgroundColor = "#fff";
    };
    SettingsComponent = __decorate([
        angular2_1.Component({
            selector: "settings",
            templateUrl: 'app/components/settings/settings-component.html',
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
})();
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings-component.js.map