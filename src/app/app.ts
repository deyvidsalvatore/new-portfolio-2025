import { Component, inject } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { Header } from "./shared/components/header/header";
import { ThemeService } from './shared/services/theme.service';
import { Hero } from "./pages/hero/hero";
import { About } from "./pages/about/about";
import { Experiences } from "./pages/experiences/experiences";
import { Badges } from "./pages/badges/badges";
import { SkillsWrapper } from "./pages/skills-wrapper/skills-wrapper";
import { Projects } from "./pages/projects/projects";
import { Testimonials } from "./pages/testimonials/testimonials";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experiences, Badges, SkillsWrapper, Projects, Testimonials, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [DataService, ThemeService]
})
export class App {
  _dataService = inject(DataService);
  _themeService =inject(ThemeService);

  get currentTheme() {
    return this._themeService.currentTheme();
  }

  get currentLanguage() {
    return this._dataService.currentLanguage();
  }
}
