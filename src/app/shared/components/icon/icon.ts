import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  imports: [FontAwesomeModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  icon = input.required<IconDefinition>();
  className = input<string | undefined>('.lang-icon');
}
