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
var ItemsComponent = (function () {
    function ItemsComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        Notification.requestPermission();
        this.storageService.init();
        this.socket = io.connect("https://freechat-firefox.herokuapp.com");
        this.username = localStorage.getItem("username");
        localforage.getItem("messages", function (err, value) {
            if (err) {
                console.log(err);
                new Notification("Error fetching messages! Please reload the app");
            }
            else {
                if (value.length > 50) {
                    localStorage.removeItem("localforage/messages");
                    localStorage.removeItem("localforage/newsMessages");
                    localStorage.removeItem("localforage/firefoxOSMessages");
                    _this.messages = [];
                }
                else if (value === null) {
                    _this.messages = [];
                }
                else {
                    _this.messages = value;
                }
            }
        });
        this.socket.on("message", function (data) {
            if (data.message) {
                _this.messages.push(data);
                _this.storageService.save("messages", _this.messages);
            }
            else {
                console.log("error", data);
            }
        });
        this.socket.on("messageAdded", function (data) {
            new Notification(data.user + " " + "says" + " " + data.message);
        });
        this.socket.on("userLogged", function () {
            new Notification("A new user has joined chat");
        });
    }
    ItemsComponent.prototype.routerOnActivate = function (next, prev) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeIn");
        document.querySelector("#testTwo").classList.add("fadeIn");
        document.querySelector("#testThree").classList.add("fadeIn");
    };
    ItemsComponent.prototype.send = function (text) {
        this.socket.emit("send", { message: text, user: this.username });
    };
    ItemsComponent = __decorate([
        angular2_1.Component({
            selector: 'shoppingItems',
            templateUrl: 'app/components/items/items-component.html',
            providers: [storage_service_1.StorageService],
            directives: [router_1.RouterLink, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], ItemsComponent);
    return ItemsComponent;
})();
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items-component.js.map