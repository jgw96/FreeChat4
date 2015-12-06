import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ItemsComponent } from '../items/items-component';
import { LoginComponent } from "../login/login-component";
import { RoomComponent } from "../room/room-component";
import { NewsComponent } from "../news/news-component";
import { SettingsComponent } from "../settings/settings-component";
import { FirefoxOSComponent } from "../firefoxOS/firefoxos-component";

@Component({ 
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/Items',              as: 'Items',  component: ItemsComponent },
  { path: "/",              as: "Login",  component: LoginComponent },
  { path: "/Rooms",         as: "Rooms", component: RoomComponent },
  { path: "/News",          as: "News", component: NewsComponent},
  { path: "/Settings",      as: "Settings", component: SettingsComponent},
  { path: "/FirefoxOS",     as: "FirefoxOS", component: FirefoxOSComponent}
])
export class AppComponent {

}
