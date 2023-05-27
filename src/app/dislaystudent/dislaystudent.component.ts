import { Component, OnInit } from '@angular/core';
import { StudentsManagementService } from '../students-management.service';
import { Student } from 'interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dislaystudent',
  templateUrl: './dislaystudent.component.html',
  styleUrls: ['./dislaystudent.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class DislaystudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = {
    username: '',
    email: '',
    password: ''
  };

  constructor(public studentsService: StudentsManagementService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }

  addStudent(): void {
    if (this.newStudent.username && this.newStudent.email && this.newStudent.password) {
      this.studentsService.addStudent(this.newStudent);
      this.newStudent = {
        username: '',
        email: '',
        password: ''
      };
    }
  }
}
