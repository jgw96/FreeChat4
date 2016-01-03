/// <reference path="./../typings/tsd.d.ts" />
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.init = function () {
        localforage.setDriver(localforage.INDEXEDDB);
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