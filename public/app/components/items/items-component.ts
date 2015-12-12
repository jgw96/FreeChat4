
import { Component, View, NgFor, NgModel } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { StorageService } from "../../services/storage-service";


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

  constructor(private storageService: StorageService) {
    Notification.requestPermission();
    this.storageService.init();
    this.socket = io.connect("https://freechat-firefox.herokuapp.com");
    this.username = localStorage.getItem("username");

    localforage.getItem("messages", (err, value) => {
      if (err) {
        console.log(err)
        new Notification("Error fetching messages! Please reload the app");
      }
      else {

        if (value !== null) {
          if (value.length > 50) {
            localStorage.removeItem("localforage/messages");
            localStorage.removeItem("localforage/newsMessages");
            localStorage.removeItem("localforage/firefoxOSMessages");

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

    this.socket.on("message", (data) => {
      if (data.message) {
        this.messages.push(data);
        this.storageService.save("messages", this.messages);
      }
      else {
        console.log("error", data);
      }
    })

    this.socket.on("messageAdded", (data) => {
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




