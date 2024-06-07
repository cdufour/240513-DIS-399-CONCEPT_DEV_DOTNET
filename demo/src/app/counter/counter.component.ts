import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0

  // méthodes
  onClick() {
    this.count += 1;
    
    if (this.count === 20) {
      this.count = 1;
    }
    
  }
}
