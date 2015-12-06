import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component ({
	selector: "settings",
	templateUrl: 'app/components/settings/settings-component.html',
	directives: [NgFor, RouterLink]
})
export class SettingsComponent implements OnActivate {
	
	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("navigated");
		document.querySelector("#test").classList.add("slideInLeft");
		document.querySelector("#testTwo").classList.add("slideInLeft");
    }
	
	constructor() {
		
	}
	
	clearMessages() {
		localStorage.removeItem("localforage/messages");
		localStorage.removeItem("localforage/newsMessages");
		localStorage.removeItem("localforage/firefoxOSMessages");
		new Notification("Messages cleared");
	}
	
	
}