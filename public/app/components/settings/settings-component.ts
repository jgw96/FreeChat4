import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component({
	selector: "settings",
	templateUrl: 'app/components/settings/settings-component.html',
	directives: [NgFor, RouterLink]
})
export class SettingsComponent implements OnActivate {

	routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("navigated");
		document.querySelector("#test").classList.add("fadeInLeft");
		document.querySelector("#testTwo").classList.add("fadeInLeft");
    }

	constructor() {

	}

	clearMessages() {
		localforage.removeItem("messages");
		localforage.removeItem("newsMessages");
		localforage.removeItem("firefoxOSMessages");
		localforage.removeItem("sportsMessages");
		new Notification("Messages cleared");
	}

	darkTheme() {
		document.querySelector("body").style.backgroundColor = "black";
	}

	defaultTheme() {
		document.querySelector("body").style.backgroundColor = "#fff";
	}


}