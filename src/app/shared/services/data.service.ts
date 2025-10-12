import { Injectable, signal, computed, effect } from '@angular/core';
import { ABOUT_ME_EN, ABOUT_ME_PT } from '../../_data/about-me.data';
import { EXPERIENCES_EN, EXPERIENCES_PT } from '../../_data/experiences.data';
import { HERO_EN, HERO_PT } from '../../_data/hero.data';
import {
  HARD_SKILLS_SECTION_EN,
  HARD_SKILLS_SECTION_PT,
  SOFT_SKILLS_SECTION_EN,
  SOFT_SKILLS_SECTION_PT,
} from '../../_data/skills.data';
import { NAVBAR_EN, NAVBAR_PT } from '../../_data/navbar.data';
import { TESTIMONIALS_EN_SIGNAL, TESTIMONIALS_PT_SIGNAL } from '../../_data/testimonials.data';
import { PROJECTS_EN_SIGNAL, PROJECTS_PT_SIGNAL } from '../../_data/projects.data';
import { BADGES_DATA } from '../../_data/badges.data';
import { GET_IN_TOUCH_EN, GET_IN_TOUCH_PT } from '../../_data/get-in-touch.data';
import { ROLES_EN, ROLES_PT } from '../../_data/roles.data';
import { FOOTER_EN, FOOTER_PT } from '../../_data/footer.data';

@Injectable()
export class DataService {
  private language = signal<'en' | 'pt'>((localStorage.getItem('lang') as 'en' | 'pt') || 'en');

  readonly currentLanguage = this.language.asReadonly();

  private readonly dataMap = {
    aboutMe: { en: ABOUT_ME_EN, pt: ABOUT_ME_PT },
    experiences: { en: EXPERIENCES_EN, pt: EXPERIENCES_PT },
    hero: { en: HERO_EN, pt: HERO_PT },
    hardSkills: { en: HARD_SKILLS_SECTION_EN, pt: HARD_SKILLS_SECTION_PT },
    softSkills: { en: SOFT_SKILLS_SECTION_EN, pt: SOFT_SKILLS_SECTION_PT },
    nav: { en: NAVBAR_EN, pt: NAVBAR_PT },
    testimonials: { en: TESTIMONIALS_EN_SIGNAL, pt: TESTIMONIALS_PT_SIGNAL },
    projects: { en: PROJECTS_EN_SIGNAL, pt: PROJECTS_PT_SIGNAL },
    getInTouch: { en: GET_IN_TOUCH_EN, pt: GET_IN_TOUCH_PT },
    roles: { en: ROLES_EN, pt: ROLES_PT },
    footer: { en: FOOTER_EN, pt: FOOTER_PT }
  };

  readonly aboutMe = computed(() => this.dataMap.aboutMe[this.language()]());
  readonly experiences = computed(() => this.dataMap.experiences[this.language()]());
  readonly heroSection = computed(() => this.dataMap.hero[this.language()]());
  readonly hardSkillsSection = computed(() => this.dataMap.hardSkills[this.language()]());
  readonly softSkillsSection = computed(() => this.dataMap.softSkills[this.language()]());
  readonly navLinks = computed(() => this.dataMap.nav[this.language()]());
  readonly testimonials = computed(() => this.dataMap.testimonials[this.language()]());
  readonly projects = computed(() => this.dataMap.projects[this.language()]());
  readonly getInTouch = computed(() => this.dataMap.getInTouch[this.language()]());
  readonly badges = computed(() => BADGES_DATA());
  readonly roles = computed(() => this.dataMap.roles[this.language()]());
  readonly footer = computed(() => this.dataMap.footer[this.language()]());

  constructor() {
    effect(() => {
      localStorage.setItem('lang', this.language());
    });
  }

  switchLanguage = (lang: 'en' | 'pt') => this.language.set(lang);
  toggleLanguage = () => this.language.set(this.language() === 'pt' ? 'en' : 'pt');
}
