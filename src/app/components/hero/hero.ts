import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { STACKS_DATA } from '../../data/stacks.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  themeService = inject(ThemeService);
  stacks = STACKS_DATA;

  scrollToContact(event: Event) {
    event.preventDefault();
    const target = document.getElementById('footer');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects(event: Event) {
    event.preventDefault();
    const target = document.getElementById('projetos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
