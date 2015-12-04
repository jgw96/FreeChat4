import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { routerInjectables } from 'angular2/router';

@Component({
	selector: "login",
	templateUrl: 'app/components/login/login-component.html',
	directives: [RouterLink]
})
export class LoginComponent {
	constructor() {
		
	}
	
	login(name: string) {
		localStorage.setItem("username", name);
	}
}