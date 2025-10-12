import { Component, HostListener, input, output } from '@angular/core';
import { NavLink } from '../../models/nav-link.model';
import { FA_ICONS } from '../../../_data/icons.data';
import { Icon } from "../icon/icon";
import { ToggleThemeSwitch } from "../toggle-theme-switch/toggle-theme-switch";

@Component({
  selector: 'app-header',
  imports: [Icon, ToggleThemeSwitch],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;

  navLinks = input.required<NavLink[]>();
  currentLanguage = input.required<'en' | 'pt'>();
  currentTheme = input.required<'light' | 'dark'>();

  toggleLanguage = output<string>();
  toggleTheme = output<boolean>();

  icons = FA_ICONS;

  onToggle(lang: 'en' | 'pt') {
    this.toggleLanguage.emit(lang);
  }

  onTheme(theme: 'light' | 'dark') {
    this.toggleTheme.emit(theme === 'light' ? true : false);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 1024 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
