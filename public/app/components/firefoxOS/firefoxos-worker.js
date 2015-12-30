importScripts("/modules/localforage/dist/localforage.nopromises.min.js");
self.addEventListener('message', function (e) {
    console.log("started");
    localforage.removeItem("messages");
    localforage.removeItem("newsMessages");
    localforage.removeItem("firefoxOSMessages");
    console.log("removed");
}, false);
//# sourceMappingURL=firefoxos-worker.js.map