import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>

    <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  </section>
  `,
  styleUrl: './home.component.css',

})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: Housinglocation ={
    id: 1,
    name: 'test Home',
    city: 'test city',
    state: 'Test State',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 2,
    laundry: true,
    wifi: false
  };

}
