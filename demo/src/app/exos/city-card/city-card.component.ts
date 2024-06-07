import { Component, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-card',
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css'
})
export class CityCardComponent {
  @Input() city: City | null = null;
}
