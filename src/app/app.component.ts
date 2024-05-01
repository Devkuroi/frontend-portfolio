import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from "./shared/home/home.component";
import { ProjectsComponent } from "./shared/projects/projects.component";
import { SkillsComponent } from "./shared/skills/skills.component";
import { AboutComponent } from "./shared/about/about.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ContactmeComponent } from "./shared/contactme/contactme.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, HomeComponent, ProjectsComponent, SkillsComponent, AboutComponent, FooterComponent, ContactmeComponent]
})
export class AppComponent {
  title = 'frontend-devkuroi';
}
