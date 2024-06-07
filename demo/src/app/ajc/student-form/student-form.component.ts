import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentName = "Kevin";
  student: Student = { name: 'Chris', grade: 10};

  constructor(private studentService: StudentService) {}

  onChange(event: any) {
    console.log(event.target.value);
    this.studentName = event.target.value;
  }

  onSubmit() {
    console.log('form submitted...');

    // requête http (ajax) ici
    this.studentService
      .postStudent(this.student)
      .subscribe(student => console.log(student))
  }
}
