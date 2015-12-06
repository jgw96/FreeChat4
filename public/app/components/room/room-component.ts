import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component ({
	selector: "rooms",
	templateUrl: 'app/components/room/room-component.html',
	directives: [NgFor, RouterLink]
})
export class RoomComponent implements OnActivate {
	
	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("navigated");
		document.querySelector("#test").classList.add("slideInRight");
		document.querySelector("#testTwo").classList.add("slideInRight");
    }
	
	constructor() {
		
	}
	
	
}