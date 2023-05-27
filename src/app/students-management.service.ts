import { Injectable } from '@angular/core';
import { Student } from 'interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsManagementService {

  constructor() { }
  students:Student[]=[
    {
   username:'Wambui Karanja',
   email: 'wambui@thejitu.com',
   password: '12345'
    },
    {
    username:'Esther Wamuyu',
    email: 'wamuyu@thejitu.com',
    password: '12345'
     }

  ]

  getStudents():Student[]{
    return this.students
  }
  addStudent(newStudent:Student){
    this.students.push(newStudent)
  }

}
