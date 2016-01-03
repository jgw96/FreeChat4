import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink, OnActivate, ComponentInstruction } from 'angular2/router';
import { StorageService } from "../../services/storage-service";

declare var Notification;
declare var io;

@Component({
	selector: "rooms",
	templateUrl: 'app/components/firefoxOS/firefoxos-component.html',
	providers: [StorageService],
	directives: [NgFor, RouterLink]
})
export class FirefoxOSComponent implements OnActivate {

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
		console.log("navigated");
		document.querySelector("#test").classList.add("fadeInRight");
		document.querySelector("#testTwo").classList.add("fadeInRight");
		document.querySelector("#testThree").classList.add("fadeInRight");
    }

	socket: any;
    messages: any[];
    username: string;

	constructor(private storageService: StorageService) {
		this.storageService.init();
        this.socket = io.connect("https://freechat-firefox.herokuapp.com/FirefoxOS");
        this.username = localStorage.getItem("username");
        
        const worker = new Worker("app/components/firefoxOS/firefoxos-worker.js");

		localforage.getItem("firefoxOSMessages", (err, value) => {
			if (err) {
				console.log(err)
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

		this.socket.on("firefoxOSMessage", (data) => {
            if (data.message) {
                this.messages.push(data);
				this.storageService.save("firefoxOSMessages", this.messages);
            }
            else {
                console.log("error", data);
            }
        })

		this.socket.on("newFirefoxOSUser", () => {
			new Notification("Welcome to the Firefox OS Room!");
		})

		this.socket.on("firefoxOSUserLogged", () => {
			new Notification("Someone joined the Firefox OS Room!");
		})

		this.socket.on("firefoxOSMessageAdded", (data) => {
            new Notification(data.user + " " + "says" + " " + data.message);
        })
	}

	send(text: string) {
        this.socket.emit("firefoxOSSend", { message: text, user: this.username });
    }



}