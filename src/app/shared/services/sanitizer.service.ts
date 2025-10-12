import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, Observable, take } from 'rxjs';

@Injectable()
export class SanitizerService {
  private readonly _http = inject(HttpClient);
  private readonly _sanitizer = inject(DomSanitizer);

  loadSvg(path: string): Observable<SafeHtml> {
    return this._http.get(path, { responseType: 'text' }).pipe(
      take(1),
      map((svg) => this._sanitizer.bypassSecurityTrustHtml(svg))
    );
  }
}
