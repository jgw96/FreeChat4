import { Component, View, NgFor } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: "login",
    templateUrl: 'app/components/login/login-component.html',
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class LoginComponent {
    public user: string;
    public saved: boolean;

    constructor() {
        let clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });

        this.saved = false;

        if (localStorage.getItem("username") !== null) {
            document.querySelector("#loginButton").dispatchEvent(clickEvent);
            console.log("clicked");
        }
    }

    login(name: string) {
        localStorage.setItem("username", name);
        document.querySelector("#saveButton").classList.add("fadeOutLeft");
        document.querySelector("#inputBox").classList.add("fadeOutLeft");
        setTimeout(() => {
            this.saved = true;
        }, 700)
    }
}