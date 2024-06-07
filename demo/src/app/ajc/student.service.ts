import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

const API = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root',

})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(API);
  }

  postStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(API, student);
  }
}
