import { Component, input } from '@angular/core';
import { Footer as IFooter } from '../../models/footer.model';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  footerContent = input.required<IFooter>();
  fullName = 'Diego Pablo';
}
