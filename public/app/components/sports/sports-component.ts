import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { StorageService } from "../../services/storage-service";

@Component({
	selector: "rooms",
	templateUrl: 'app/components/sports/sports-component.html',
	providers: [StorageService],
	directives: [NgFor, RouterLink]
})
export class SportsComponent implements OnActivate {

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
		//this.messages = [];
        this.socket = io.connect("https://freechat-firefox.herokuapp.com/Sports");
		//this.socket = io.connect("localhost:8080/Sports");
        this.username = localStorage.getItem("username");

		localforage.getItem("sportsMessages", (err, value) => {
			if (err) {
				console.log(err)
			}
			else {
				if (value !== null) {
					if (value.length > 50) {
						localStorage.removeItem("localforage/messages");
						localStorage.removeItem("localforage/newsMessages");
						localStorage.removeItem("localforage/firefoxOSMessages");
						localStorage.removeItem("localforage/sportsMessages")

						this.messages = [];
					}
				}
				//there were no items saved
				if (value === null) {
					this.messages = [];
					console.log("no items saved");
				}
				//there were items saved
				else {
					this.messages = value;
					console.log("there were items saved");
				}
			}
		})

		this.socket.on("sportsMessage", (data) => {
            if (data.message) {
                this.messages.push(data);
				this.storageService.save("sportsMessages", this.messages);
            }
            else {
                console.log("error", data);
            }
        })

		this.socket.on("newSportsUser", () => {
			new Notification("Welcome to the Sports Room!");
		})

		this.socket.on("sportsUserLogged", () => {
			new Notification("Someone joined the Sports Room!");
		})

		this.socket.on("sportsMessageAdded", (data) => {
            new Notification(data.user + " " + "says" + " " + data.message);
        })
	}

	send(text: string) {
		console.log("send");
        this.socket.emit("sportsSend", { message: text, user: this.username });
		console.log("sent");
    }



}