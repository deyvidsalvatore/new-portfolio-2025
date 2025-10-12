import { signal } from '@angular/core';
import { NavLink } from '../shared/models/nav-link.model';

export const NAVBAR_EN = signal<NavLink[]>([
  {
    label: 'Home',
    link: '',
  },
  {
    label: 'About',
    link: 'about',
  },
  {
    label: 'Experiences',
    link: 'experiences',
  },
  {
    label: 'Badges',
    link: 'badges',
  },
  {
    label: 'Hard Skills',
    link: 'hard-skills',
  },
  {
    label: 'Soft Skills',
    link: 'soft-skills',
  },
  {
    label: 'Projects',
    link: 'projects',
  },
  {
    label: 'Testimonials',
    link: 'testimonials',
  },
  {
    label: 'Contact',
    link: 'contact',
  },
]);

export const NAVBAR_PT = signal<NavLink[]>([
  {
    label: 'Início',
    link: 'home',
  },
  {
    label: 'Sobre',
    link: 'about',
  },
  {
    label: 'Experiências',
    link: 'experiences',
  },
  {
    label: 'Conquistas',
    link: 'badges',
  },
  {
    label: 'Hard Skills',
    link: 'hard-skills',
  },
  {
    label: 'Soft Skills',
    link: 'soft-skills',
  },
  {
    label: 'Projetos',
    link: 'projects',
  },
  {
    label: 'Depoimentos',
    link: 'testimonials',
  },
  {
    label: 'Contato',
    link: 'contact',
  },
]);
