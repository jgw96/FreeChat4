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
var FirefoxOSComponent = (function () {
    function FirefoxOSComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.storageService.init();
        this.socket = io.connect("https://freechat-firefox.herokuapp.com/FirefoxOS");
        this.username = localStorage.getItem("username");
        var worker = new Worker("app/components/firefoxOS/firefoxos-worker.js");
        localforage.getItem("firefoxOSMessages", function (err, value) {
            if (err) {
                console.log(err);
            }
            else {
                if (value !== null) {
                    if (value.length > 50) {
                        worker.postMessage("start");
                        _this.messages = [];
                    }
                }
                //there were no items saved
                if (value === null) {
                    _this.messages = [];
                }
                else {
                    _this.messages = value;
                }
            }
        });
        this.socket.on("firefoxOSMessage", function (data) {
            if (data.message) {
                _this.messages.push(data);
                _this.storageService.save("firefoxOSMessages", _this.messages);
            }
            else {
                console.log("error", data);
            }
        });
        this.socket.on("newFirefoxOSUser", function () {
            new Notification("Welcome to the Firefox OS Room!");
        });
        this.socket.on("firefoxOSUserLogged", function () {
            new Notification("Someone joined the Firefox OS Room!");
        });
        this.socket.on("firefoxOSMessageAdded", function (data) {
            new Notification(data.user + " " + "says" + " " + data.message);
        });
    }
    FirefoxOSComponent.prototype.routerOnActivate = function (next, prev) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeInRight");
        document.querySelector("#testTwo").classList.add("fadeInRight");
        document.querySelector("#testThree").classList.add("fadeInRight");
    };
    FirefoxOSComponent.prototype.send = function (text) {
        this.socket.emit("firefoxOSSend", { message: text, user: this.username });
    };
    FirefoxOSComponent = __decorate([
        angular2_1.Component({
            selector: "rooms",
            templateUrl: 'app/components/firefoxOS/firefoxos-component.html',
            providers: [storage_service_1.StorageService],
            directives: [angular2_1.NgFor, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], FirefoxOSComponent);
    return FirefoxOSComponent;
})();
exports.FirefoxOSComponent = FirefoxOSComponent;
//# sourceMappingURL=firefoxos-component.js.map