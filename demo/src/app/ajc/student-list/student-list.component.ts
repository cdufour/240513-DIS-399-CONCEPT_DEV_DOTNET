import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  /*
  students: Student[] = [
    { name: "Kevin", grade: 18 },
    { name: "Dunia", grade: 16 },
    { name: "Davy", grade: 2 }
  ];
  */
  students: Student[] = [];
  showAllGrades: boolean = false;
  nbFavorites: number = 0;

  // injection de dépendance (design pattern) - hit typing
  constructor(private studentService: StudentService) {

    this.studentService
      .getStudents()
      .subscribe(students => this.students = students)
  

    /*
    let promise = 
      fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(promise);

    promise
      .then(res => res.json())
      .then(todo => console.log(todo))
    */

  }

  updateFavorites(e: boolean) {
    //console.log('mon enfant me parle...', e);
    e ? this.nbFavorites++ : this.nbFavorites--;
  }
}
