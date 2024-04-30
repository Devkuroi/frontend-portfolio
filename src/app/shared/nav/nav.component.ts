import { Component } from '@angular/core';
import { HamburgerComponent } from "./hamburger/hamburger.component";
import { ContactmeComponent } from "./contactme/contactme.component";
import { NotificationComponent } from "./notification/notification.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [HamburgerComponent, ContactmeComponent, NotificationComponent]
})
export class NavComponent {

}
