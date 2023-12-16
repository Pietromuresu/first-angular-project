import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form (keydown.enter)= "filterResults(filter.value)" (keydown.enter) ="$event.preventDefault()">
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button"  (click)="filterResults(filter.value)">Search</button>
    </form>

    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  </section>
  `,
  styleUrl: './home.component.css',

})
export class HomeComponent {

  housingLocationList : Housinglocation[] = [];
  housingService : HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) =>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

  }
}
