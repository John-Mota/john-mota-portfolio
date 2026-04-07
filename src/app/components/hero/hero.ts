import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
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
