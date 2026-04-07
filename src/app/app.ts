import { Component, signal, inject, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects';
import { StacksComponent } from './components/stacks/stacks';
import { FooterComponent } from './components/footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    PersonalProjectsComponent,
    StacksComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Portfólio | John Mota');
  themeService = inject(ThemeService);

  ngOnInit() {
    // Service auto-initializes on injection, setting the theme correctly on load.
  }
}
