import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-age-display',
  standalone: true,
  template: `
    <div>
      <h3>Average age of people in Poland:</h3>
      <p>{{ averageAge }}</p>
    </div>
  `,
  styles: [],
})
export class AgeDisplayComponent {
  @Input() averageAge: number = 0;
}
