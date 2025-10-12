import { Component, computed, input } from '@angular/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  projects = input.required<Project[]>();

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Projetos' : 'Projects';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Alguns dos projetos que desenvolvi.'
      : 'Some of the projects I have developed.';
  });
}
