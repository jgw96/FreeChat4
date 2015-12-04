
import { Component, View, NgFor, NgModel } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { DataService } from '../../services/data-service';
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
    //this.messages = [];
    this.storageService.init();
    this.socket = io.connect("http://localhost:3700");
    this.username = localStorage.getItem("username");
    
    localforage.getItem("messages", (err, value) => {
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
    
    this.socket.on("newUser", () => {
      new Notification("Welcome to FireChat");
    })
    
    this.socket.on("userLogged", () => {
      new Notification("A new user has joined chat");
    })
  }
  
  send(text: string) {
    this.socket.emit("send", {message: text, user: this.username});
  }
  
  changed() {
    console.log("it worked");
  }


}




