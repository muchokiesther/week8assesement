import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsManagementService } from '../students-management.service';
import { Student } from 'interface';
//import {Student} from 'interface'

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],
  standalone:true,
  imports:[ FormsModule,
    ReactiveFormsModule,CommonModule]
})
export class AddstudentComponent implements OnInit {
  form!: FormGroup;

  constructor(private studentsService: StudentsManagementService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email], [<AsyncValidatorFn>this.checkEmailPattern]),
      password: new FormControl('', [Validators.required])
    });
  }
  // Validators.pattern(/^[a-zA-Z0-9._%+-]+@thejitu\.com$/)
  async checkEmailPattern(control:FormControl){
    if(control.value && !control.value.includes('@thejitu.com')){
      return {emailerror:true}
    }
    return null

  }

  onSubmit(): void {
    if (this.form.valid) {
      const newStudent: Student = {
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password
      };
      this.studentsService.addStudent(newStudent);
      this.form.reset();
    }
  }
}