import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { AjcModule } from './ajc/ajc.module';
import { StudentsComponent } from './students/students.component';
import { ExosModule } from './exos/exos.module';

interface Training {
  title: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ExampleComponent, 
    CommonModule, 
    CounterComponent,
    AjcModule,
    ExosModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'Angular'; // explicit typing
  student = 'Dunia'; // implicit typing (inference)
  ng_version: number = 18 - 1;
  is_chris_good_teacher: boolean = false;

  fruits: string[] = ['pomme', 'kiwi', 'mangue'];

  training: Training = { 
    title: "Angular", 
    level: 1, 
    category : "web development"
  };

  show_quote: boolean = false;

  toggleQuote() {
    // clearInterval()
    this.show_quote = !this.show_quote;
  }
}
