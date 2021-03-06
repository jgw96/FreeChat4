/// <reference path="../../typings/tsd.d.ts" />

import { Component, View, NgFor, NgModel } from 'angular2/angular2';
import { RouterLink, OnActivate, ComponentInstruction } from 'angular2/router';
import { StorageService } from "../../services/storage-service";

declare var Notification;
declare var io;

@Component({
    selector: 'shoppingItems',
    templateUrl: 'app/components/items/items-component.html',
    providers: [StorageService],
    directives: [RouterLink, NgFor]
})
export class ItemsComponent implements OnActivate {

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("navigated");
        document.querySelector("#test").classList.add("fadeIn");
        document.querySelector("#testTwo").classList.add("fadeIn");
        document.querySelector("#testThree").classList.add("fadeIn");
    }

    socket: any;
    messages: any[];
    username: string;
    password: string;

    constructor(private storageService: StorageService) {
        let defaultThemeColor = <HTMLElement>document.querySelector("body");
        defaultThemeColor.style.backgroundColor = "#fff";
        
        Notification.requestPermission();
        
        const worker: any = new Worker("app/components/items/item-worker.js");
        
        this.storageService.init();

        this.socket = io.connect("https://freechat-firefox.herokuapp.com");

        this.username = localStorage.getItem("username");


        localforage.getItem("messages", (err: string, value: any) => {
            if (err) {
                console.log(err)
                new Notification("Error fetching messages! Please reload the app");
            }
            else {

                if (value !== null) {

                    if (value.length > 50) {
                        worker.postMessage("start");
                        this.messages = [];
                    }
                }
        
                //there were no items saved
                if (value === null) {
                    this.messages = [];
                }
                //there were items saved
                else {
                    this.messages = value;
                }

            }
        })
        
        this.socket.on("message", (data: any) => {
            if (data.message) {
                this.messages.push(data);
                this.storageService.save("messages", this.messages);
            }
            else {
                console.log("error", data);
            }
        })

        this.socket.on("messageAdded", (data: any) => {
            new Notification(data.user + " " + "says" + " " + data.message);
        })

        this.socket.on("userLogged", () => {
            new Notification("A new user has joined chat");
        })
    }


    send(text: string) {
        this.socket.emit("send", { message: text, user: this.username });
    }


}




