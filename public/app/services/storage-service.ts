/// <reference path="./../typings/tsd.d.ts" />

import * as localforage from "localforage";

export class StorageService {

    messages: Object[];

    constructor() {
       
    }

    init() {
        localforage.setDriver(localforage.LOCALSTORAGE);
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