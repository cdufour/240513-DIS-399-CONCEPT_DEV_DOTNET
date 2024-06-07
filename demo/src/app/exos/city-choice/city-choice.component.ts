import { Component } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-choice',
  templateUrl: './city-choice.component.html',
  styleUrl: './city-choice.component.css'
})
export class CityChoiceComponent {
  cities: City[] = [
    { name: "Turin", country: "Italie", image: "turin.jpg" },
    { name: "Paris", country: "France", image: "paris.jpg" },
    { name: "Rio", country: "Brésil", image: "rio.jpg" }
  ];

  selectedCity: City | null = null;

  myDate = Date();

  onChange(event: any) {
    let cityName = event.target.value;
    console.log(cityName);
    // .filter renvoie un tableau (contenant ici un seul élément)
    this.selectedCity = 
      this.cities.filter(city => city.name ===cityName)[0];
  }
}
