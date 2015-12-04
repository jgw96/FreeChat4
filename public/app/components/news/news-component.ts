import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { StorageService } from "../../services/storage-service";

@Component ({
	selector: "rooms",
	templateUrl: 'app/components/news/news-component.html',
	providers: [StorageService],
	directives: [NgFor, RouterLink]
})
export class NewsComponent implements OnActivate {
	
	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
       console.log("navigated");
	   document.querySelector("#test").classList.add("fadeIn");
	   document.querySelector("#testTwo").classList.add("fadeIn");
       document.querySelector("#testThree").classList.add("fadeIn");
    }
	
	
	socket: any;
    messages: any[];
    username: string;
  
	constructor(private storageService: StorageService) {
		this.storageService.init();
		//this.messages = [];
        this.socket = io.connect("http://localhost:3700/News");
        this.username = localStorage.getItem("username");
		
		localforage.getItem("newsMessages", (err, value) => {
			if (err) {
				console.log(err)
			}
			else {
				
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
		
		this.socket.on("newsMessage", (data) => {
            if (data.message) {
                this.messages.push(data);
				this.storageService.save("newsMessages", this.messages);
            }
            else {
                console.log("error", data);
            }
        })
		
		this.socket.on("newNewsUser", () => {
			new Notification("Welcome to the News Room!");
		})
		
		this.socket.on("newsUserLogged", () => {
			new Notification("Someone joined the News Room!");
		})
		
		this.socket.on("newsMessageAdded", (data) => {
            new Notification(data.user + " " + "says" + " " + data.message);
        })
	}
	
	send(text: string) {
		console.log("send");
        this.socket.emit("newsSend", {message: text, user: this.username});
		console.log("sent");
    }
	
	
	
}