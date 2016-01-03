/// <reference path="./../typings/tsd.d.ts" />

export class StorageService {

    messages: Object[];

    constructor() {
       
    }

    init() {
        localforage.setDriver(localforage.INDEXEDDB);
    }

    save(itemName: string, item: any) {

        //was item
        localforage.setItem(itemName, item, (err, value) => {
            if (err) {
                console.log(err);
            }
            else {
                //do nothing cause it worked
            }
        });
    }
}