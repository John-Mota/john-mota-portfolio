import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  // Initialize with a default, but we'll override it if we are in the browser
  readonly currentTheme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
      
      // We use an effect to apply the side effect of saving to localStorage
      // and updating the DOM whenever the currentTheme signal changes.
      effect(() => {
        const theme = this.currentTheme();
        this.applyTheme(theme);
      });
    }
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.currentTheme.set(savedTheme);
    } else {
      // Check system preference
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      this.currentTheme.set(prefersLight ? 'light' : 'dark');
    }
  }

  private applyTheme(theme: Theme): void {
    localStorage.setItem('portfolio-theme', theme);
    const body = document.body;
    
    // As per previous styles.scss configuration:
    // the dark theme is identified via data-theme="dark", standard is light Mode
    // Or based on prompt: "adiciona/remove classe dark ou light no <body>" ? 
    // In styles.scss we saw: [data-theme="dark"] for variables and Light mode is default without data-theme.
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  toggleTheme(): void {
    this.currentTheme.update(theme => theme === 'dark' ? 'light' : 'dark');
  }
}
