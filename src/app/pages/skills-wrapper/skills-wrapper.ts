import { Component, input } from '@angular/core';
import { Skills } from './skills/skills';
import { SkillSection } from '../../shared/models/skill.model';

@Component({
  selector: 'app-skills-wrapper',
  imports: [Skills],
  templateUrl: './skills-wrapper.html',
  styleUrl: './skills-wrapper.scss',
})
export class SkillsWrapper {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  hardSkills = input.required<SkillSection>();
  softSkills = input.required<SkillSection>();
}
