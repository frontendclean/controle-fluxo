import { Component, inject, OnInit } from '@angular/core';
import { delay, mergeMap, Observable, of, throwError } from 'rxjs';
import { ComponentModule } from './components/components.module';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  technologies: string[];
  is_loading: boolean;
  app_service = inject(AppService);

  ngOnInit(): void {
    this.recoverTechnologies(true);
  }

  public recoverTechnologies(has_error = false): void {
    this.is_loading = true;
    this.getTechnologies(has_error).pipe(delay(3000)).subscribe({
      next: (response) => this.technologies = response,
      error: (err) => {
        this.technologies = [];
        console.log(err)
      },
    }).add(() => this.is_loading = false);
  }

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
