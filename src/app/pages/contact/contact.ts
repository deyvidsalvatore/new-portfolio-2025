import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetInTouch } from '../../shared/models/get-in-touch.model';
import { CONTACT_LINKS } from '../../_data/contact-links.data';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  contactContent = input.required<GetInTouch>();

  contactLinks = CONTACT_LINKS;
}
