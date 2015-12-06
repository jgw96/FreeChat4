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
var router_2 = require('angular2/router');
var LoginComponent = (function () {
    function LoginComponent() {
        var clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });
        this.saved = false;
        if (localStorage.getItem("username") !== null) {
            document.querySelector("#loginButton").dispatchEvent(clickEvent);
            console.log("clicked");
        }
    }
    LoginComponent.prototype.login = function (name) {
        var _this = this;
        localStorage.setItem("username", name);
        document.querySelector("#saveButton").classList.add("fadeOutLeft");
        document.querySelector("#inputBox").classList.add("fadeOutLeft");
        setTimeout(function () {
            _this.saved = true;
        }, 700);
    };
    LoginComponent = __decorate([
        angular2_1.Component({
            selector: "login",
            templateUrl: 'app/components/login/login-component.html',
            directives: [router_2.ROUTER_DIRECTIVES, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login-component.js.map