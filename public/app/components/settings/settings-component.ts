import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink, OnActivate, ComponentInstruction } from 'angular2/router';

declare var Notification;

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
	    let darkThemeColor = <HTMLElement>document.querySelector("body");
        darkThemeColor.style.backgroundColor = "black";
	}

	defaultTheme() {
		let defaultThemeColor = <HTMLElement>document.querySelector("body");
        defaultThemeColor.style.backgroundColor = "#fff";
	}


}