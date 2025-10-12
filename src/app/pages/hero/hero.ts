import { input, Component, inject, Input, effect } from '@angular/core';
import { HeroSection } from '../../shared/models/hero.model';
import { AsyncPipe } from '@angular/common';
import { TypewriterService } from '../../shared/services/typewriter.service';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [AsyncPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  providers: [TypewriterService],
})
export class Hero {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  hero = input.required<HeroSection>();
  roles = input.required<string[]>();
  typedText$!: Observable<string>;
  destroy$ = new Subject<void>();

  private readonly _typeWriterService = inject(TypewriterService);

  constructor() {
    effect(() => {
      this.typedText$ = this._typeWriterService.getTypewriterEffect(this.roles()).pipe(
        takeUntil(this.destroy$),
        map((text) => text)
      );
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
