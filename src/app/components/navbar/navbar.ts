import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  
  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  scrollToTarget(targetId: string, event: Event) {
    event.preventDefault();
    this.isMenuOpen.set(false);
    
    // Fallback simple native smooth scroll
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
