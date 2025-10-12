import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private getInitialTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private theme = signal<'light' | 'dark'>(this.getInitialTheme());

  readonly currentTheme = this.theme.asReadonly();

  constructor() {
    effect(() => {
      const theme = this.theme();
      localStorage.setItem('theme', theme);
      document.body.classList.toggle('dark', theme === 'dark');
      document.body.classList.toggle('light', theme === 'light');
    });
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}
