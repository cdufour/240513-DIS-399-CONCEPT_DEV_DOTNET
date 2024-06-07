import { Component } from '@angular/core';
import { Student } from '../ajc/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [
    { name: "Kevin", grade: 18 },
    { name: "Dunia", grade: 16 },
    { name: "Davy", grade: 2 }
  ];

  style1: any = {
    color: 'green',
    fontSize: '30pt'
  }

  style2: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }

  class1: any = {
    winner: true,
    loser: false
  }

  constructor() {
    console.log("*** constructor time ***");

    setTimeout(() => { 
      console.log('timeout');
      //this.style1.color = 'orange'
      let mergeProps = { ...this.style1, ...this.style2 };
      this.style1 = mergeProps;
      this.class1.loser = true;
    }, 5000);
  }
}
