import { Component } from '@angular/core';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Age calculator!</h1>
    <app-age-calculator></app-age-calculator>
  `,
  styles: [],
  imports: [AgeCalculatorComponent],
})
export class AppComponent {}
