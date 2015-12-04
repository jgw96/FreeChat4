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
		document.querySelector("#test").classList.add("fadeIn");
		document.querySelector("#testTwo").classList.add("fadeIn");
    }
	
	constructor() {
		
	}
	
	clearMessages() {
		localStorage.removeItem("localforage/messages");
		new Notification("Messages cleared")
	}
	
	
}