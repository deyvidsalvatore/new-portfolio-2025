import { Component, computed, inject, input } from '@angular/core';
import { SanitizerService } from '../../../shared/services/sanitizer.service';
import { SkillSection } from '../../../shared/models/skill.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  providers: [SanitizerService],
})
export class Skills {
  data = input.required<SkillSection>();
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();

  private sanitizerService = inject(SanitizerService);

  skillsWithIcons = computed(() => {
    const skills = this.data().skills;
    return skills.map((skill) => ({
      ...skill,
      svgIcon$: this.sanitizerService.loadSvg(skill.icon),
    }));
  });

  getProficiency(percentage: number): { level: string; text: string } {
    const isPt = this.currentLanguage() === 'pt';

    const level =
      percentage <= 40
        ? isPt
          ? 'Básico'
          : 'Basic'
        : percentage <= 70
        ? isPt
          ? 'Intermediário'
          : 'Intermediate'
        : isPt
        ? 'Forte'
        : 'Strong';

    return { level, text: `${level} (${percentage}%)` };
  }
}
