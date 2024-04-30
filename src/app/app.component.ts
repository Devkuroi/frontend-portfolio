import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from "./shared/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations: [],
    imports: [RouterOutlet, NavComponent, HomeComponent]
})
export class AppComponent {
  title = 'frontend-devkuroi';
}
