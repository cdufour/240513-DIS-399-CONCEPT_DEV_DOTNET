import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentName = "Kevin";
  student: Student = { name: 'Chris', grade: 10};

  onChange(event: any) {
    console.log(event.target.value);
    this.studentName = event.target.value;
  }

  onSubmit() {
    console.log('form submitted...');

    // requête http (ajax) ici
  }
}
