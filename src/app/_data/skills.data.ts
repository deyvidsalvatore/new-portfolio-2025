import { signal } from '@angular/core';
import { Skill, SkillSection } from '../shared/models/skill.model';

// HARD SKILLS - EN
const TECHNICAL_HARD_SKILLS_EN: Array<Skill> = [
  { name: 'Python', icon: 'assets/icons/code.svg', percentage: 40 },
  { name: 'SQL', icon: 'assets/icons/database.svg', percentage: 70 },
  { name: 'Databricks', icon: 'assets/icons/terminal.svg', percentage: 40 },
  { name: 'Power BI', icon: 'assets/icons/chart-no-axes-column-increasing.svg', percentage: 70 },
  { name: 'Azure Data Factory', icon: 'assets/icons/server.svg', percentage: 40 },
  { name: 'Git', icon: 'assets/icons/git-branch.svg', percentage: 70 },
];

// HARD SKILLS - PT
const TECHNICAL_HARD_SKILLS_PT: Array<Skill> = [
  { name: 'Python', icon: 'assets/icons/code.svg', percentage: 40 },
  { name: 'SQL', icon: 'assets/icons/database.svg', percentage: 70 },
  { name: 'Databricks', icon: 'assets/icons/terminal.svg', percentage: 40 },
  { name: 'Power BI', icon: 'assets/icons/chart-no-axes-column-increasing.svg', percentage: 70 },
  { name: 'Azure Data Factory', icon: 'assets/icons/server.svg', percentage: 40 },
  { name: 'Git', icon: 'assets/icons/git-branch.svg', percentage: 70 },
];

// SOFT SKILLS - EN
export const TECHNICAL_SOFT_SKILLS_EN: Array<Skill> = [
  { name: 'Communication', icon: 'assets/icons/terminal.svg', percentage: 100 },
  { name: 'Teamwork', icon: 'assets/icons/terminal.svg', percentage: 85 },
  { name: 'Problem Solving', icon: 'assets/icons/terminal.svg', percentage: 70 },
  { name: 'Adaptability', icon: 'assets/icons/terminal.svg', percentage: 75 },
  { name: 'Empathy', icon: 'assets/icons/terminal.svg', percentage: 65 },
  { name: 'Time Management', icon: 'assets/icons/terminal.svg', percentage: 70 },
];

// SOFT SKILLS - PT
const TECHNICAL_SOFT_SKILLS_PT: Array<Skill> = [
  { name: 'Comunicação', icon: 'assets/icons/terminal.svg', percentage: 100 },
  { name: 'Trabalho em equipe', icon: 'assets/icons/terminal.svg', percentage: 85 },
  { name: 'Resolução de problemas', icon: 'assets/icons/terminal.svg', percentage: 70 },
  { name: 'Adaptabilidade', icon: 'assets/icons/terminal.svg', percentage: 75 },
  { name: 'Empatia', icon: 'assets/icons/terminal.svg', percentage: 65 },
  { name: 'Gestão do tempo', icon: 'assets/icons/terminal.svg', percentage: 70 },
];

export const HARD_SKILLS_SECTION_EN = signal<SkillSection>({
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Technologies and tools I work with',
  skills: TECHNICAL_HARD_SKILLS_EN,
});

export const HARD_SKILLS_SECTION_PT = signal<SkillSection>({
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Tecnologias e ferramentas com as quais trabalho',
  skills: TECHNICAL_HARD_SKILLS_PT,
});

export const SOFT_SKILLS_SECTION_EN = signal<SkillSection>({
  id: 'soft-skills',
  title: 'Soft Skills',
  subtitle: 'Personal and interpersonal skills',
  skills: TECHNICAL_SOFT_SKILLS_EN,
});

export const SOFT_SKILLS_SECTION_PT = signal<SkillSection>({
  id: 'soft-skills',
  title: 'Soft Skills',
  subtitle: 'Habilidades pessoais e interpessoais',
  skills: TECHNICAL_SOFT_SKILLS_PT,
});
