import { Component, computed, input } from '@angular/core';
import { Testimonial } from '../../shared/models/testimonial.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  imports: [FontAwesomeModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  testimonials = input.required<Testimonial[]>();

  quoteIcon = faQuoteRight;

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Depoimentos' : 'Testimonials';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'O que outros profissionais dizem sobre mim.'
      : 'What other professionals say about me.';
  });
}
