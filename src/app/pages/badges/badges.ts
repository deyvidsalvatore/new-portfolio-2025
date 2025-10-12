import { Component, computed, input } from '@angular/core';
import { Badge } from '../../shared/models/badge.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-badges',
  imports: [DatePipe],
  templateUrl: './badges.html',
  styleUrl: './badges.scss',
})
export class Badges {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  badges = input.required<Badge[]>();

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Conquistas' : 'Badges';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Minhas certificações e credenciais oficiais.'
      : 'My official certifications and credentials.';
  });
}
