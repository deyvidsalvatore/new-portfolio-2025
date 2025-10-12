import { Component, input, output } from '@angular/core';
import { Icon } from '../icon/icon';
import { FA_ICONS } from '../../../_data/icons.data';

@Component({
  selector: 'app-toggle-theme-switch',
  imports: [Icon],
  templateUrl: './toggle-theme-switch.html',
  styleUrl: './toggle-theme-switch.scss',
})
export class ToggleThemeSwitch {
  isToggled = input<boolean>();
  toggleChange = output<boolean>();

  sunIcon = FA_ICONS['sun'];
  moonIcon = FA_ICONS['moon'];

  toggle() {
    const newValue = !this.isToggled();
    this.toggleChange.emit(newValue);
  }
}
