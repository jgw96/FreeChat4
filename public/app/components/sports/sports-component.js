/// <reference path="../../typings/tsd.d.ts" />
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
var storage_service_1 = require("../../services/storage-service");
var SportsComponent = (function () {
    function SportsComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.storageService.init();
        //this.messages = [];
        this.socket = io.connect("https://freechat-firefox.herokuapp.com/Sports");
        //this.socket = io.connect("localhost:8080/Sports");
        this.username = localStorage.getItem("username");
        localforage.getItem("sportsMessages", function (err, value) {
            if (err) {
                console.log(err);
            }
            else {
                if (value !== null) {
                    if (value.length > 50) {
                        localStorage.removeItem("localforage/messages");
                        localStorage.removeItem("localforage/newsMessages");
                        localStorage.removeItem("localforage/firefoxOSMessages");
                        localStorage.removeItem("localforage/sportsMessages");
                        _this.messages = [];
                    }
                }
                //there were no items saved
                if (value === null) {
                    _this.messages = [];
                    console.log("no items saved");
                }
                else {
                    _this.messages = value;
                    console.log("there were items saved");
                }
            }
        });
        this.socket.on("sportsMessage", function (data) {
            if (data.message) {
                _this.messages.push(data);
                _this.storageService.save("sportsMessages", _this.messages);
            }
            else {
                console.log("error", data);
            }
        });
        this.socket.on("newSportsUser", function () {
            new Notification("Welcome to the Sports Room!");
        });
        this.socket.on("sportsUserLogged", function () {
            new Notification("Someone joined the Sports Room!");
        });
        this.socket.on("sportsMessageAdded", function (data) {
            new Notification(data.user + " " + "says" + " " + data.message);
        });
    }
    SportsComponent.prototype.routerOnActivate = function (next, prev) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeInRight");
        document.querySelector("#testTwo").classList.add("fadeInRight");
        document.querySelector("#testThree").classList.add("fadeInRight");
    };
    SportsComponent.prototype.send = function (text) {
        console.log("send");
        this.socket.emit("sportsSend", { message: text, user: this.username });
        console.log("sent");
    };
    SportsComponent = __decorate([
        angular2_1.Component({
            selector: "rooms",
            templateUrl: 'app/components/sports/sports-component.html',
            providers: [storage_service_1.StorageService],
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], SportsComponent);
    return SportsComponent;
})();
exports.SportsComponent = SportsComponent;
//# sourceMappingURL=sports-component.js.map