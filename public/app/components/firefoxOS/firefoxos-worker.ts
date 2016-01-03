importScripts("/modules/localforage/dist/localforage.nopromises.min.js");

declare var localforage;

self.addEventListener('message', (e) => {
    console.log("started");
    localforage.removeItem("messages");
    localforage.removeItem("newsMessages");
    localforage.removeItem("firefoxOSMessages");
    console.log("removed");
}, false);