import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../students/students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StudentsComponent, StudentListComponent, StudentFormComponent]
})
export class AjcModule { }
