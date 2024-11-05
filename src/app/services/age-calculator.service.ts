import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AgeCalculatorService {
  private persons = [
    { id: 1, name: 'Jan Kowalski' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jarek Kaczka' },
  ];

  private ages = [
    { person: 1, age: 18 },
    { person: 2, age: 24 },
    { person: 3, age: 666 },
  ];

  private locations = [
    { person: 1, country: 'Poland' },
    { person: 3, country: 'Poland' },
    { person: 1, country: 'USA' },
  ];

  calculateAverageAgeInPoland() {
    return of(this.ages).pipe(
      map((ages) => {
        const polandAges = ages
          .filter((ageData) =>
            this.locations.find(
              (location) =>
                location.person === ageData.person &&
                location.country === 'Poland'
            )
          )
          .map((ageData) => ageData.age);

        const total = polandAges.reduce((sum, age) => sum + age, 0);
        return total / polandAges.length || 0;
      })
    );
  }
}
