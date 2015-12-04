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
var RoomComponent = (function () {
    function RoomComponent() {
    }
    RoomComponent.prototype.routerOnActivate = function (next, prev) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeIn");
        document.querySelector("#testTwo").classList.add("fadeIn");
    };
    RoomComponent = __decorate([
        angular2_1.Component({
            selector: "rooms",
            templateUrl: 'app/components/room/room-component.html',
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], RoomComponent);
    return RoomComponent;
})();
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=room-component.js.map