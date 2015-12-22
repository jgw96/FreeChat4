/// <reference path="./../typings/tsd.d.ts" />
var localforage = require("localforage");
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.init = function () {
        localforage.setDriver(localforage.LOCALSTORAGE);
    };
    StorageService.prototype.save = function (itemName, item) {
        //was item
        localforage.setItem(itemName, item, function (err, value) {
            if (err) {
                console.log(err);
            }
            else {
            }
        });
    };
    return StorageService;
})();
exports.StorageService = StorageService;
//# sourceMappingURL=storage-service.js.map