import { Component } from '@angular/core';
import { AgeCalculatorService } from '../services/age-calculator.service';
import { AgeDisplayComponent } from '../age-display/age-display.component';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  template: `
    <div>
      <h2>Calculate the average age</h2>
      <button (click)="calculateAverageAge()">Calculate</button>
      <app-age-display [averageAge]="averageAge"></app-age-display>
    </div>
  `,
  styles: [],
  imports: [AgeDisplayComponent],
})
export class AgeCalculatorComponent {
  averageAge: number = 0;

  constructor(private ageCalculator: AgeCalculatorService) {}

  calculateAverageAge() {
    this.ageCalculator.calculateAverageAgeInPoland().subscribe((avg) => {
      this.averageAge = avg;
    });
  }
}
