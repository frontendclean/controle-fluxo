import {Injectable} from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
  public getTechnologies(has_error: boolean): Observable<string[]> {
    const technologies = ['React', 'Angular', 'Vue.js', 'Svelte', 'Bootstrap'];
    if (has_error) return this.throwErrorByFn(technologies);
    return of(technologies);
  }

  private throwErrorByFn(technologies: string[]) {
    return of(technologies).pipe(
      delay(3000),
      mergeMap(() => {
        return throwError(() => new Error('Erro ao buscar dados da API'));
      })
    );
  }
}
