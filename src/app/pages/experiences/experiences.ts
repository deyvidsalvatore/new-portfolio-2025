import { Component, computed, input } from '@angular/core';
import { Experience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  experiencesContent = input.required<Experience[]>();

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Experiências' : 'Experiences';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Minha jornada profissional e conquistas.'
      : 'My professional journey and achievements.';
  });
}
