import { Component, EventEmitter, Input, Output } 
  from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student: Student|null = null;
  @Input() demo: string = "";
  @Input() showGrade: boolean = false;
  @Output() onCheck: EventEmitter<boolean> = new EventEmitter();

  onChange(e: any) {
    // affichage de l'état (booléen) coché ou pas de la
    // checkbox
    console.log(e.target.checked);
    this.onCheck.emit(e.target.checked);
  }
}
