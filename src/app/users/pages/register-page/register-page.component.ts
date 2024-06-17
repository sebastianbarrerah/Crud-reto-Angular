import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterUser } from '../../interfaces/user-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private form:FormBuilder){}
 
  
  public myForm:FormGroup = this.form.group({
    name: ["",[ Validators.required, Validators.minLength(3)]],
    email: ["",[ Validators.required, Validators.email]],
    password: ["",[ Validators.required, Validators.minLength(5)]],
  })
  
  public userRegister:RegisterUser = {email: '', password: '', name: ''}

  dataFormRegister():void{
    if(!this.myForm.valid) return
    this.userRegister.name = this.myForm.controls['name'].value;    
    this.userRegister.email = this.myForm.controls['email'].value;
    this.userRegister.password = this.myForm.controls['password'].value; 
    this.myForm.reset()
  }
  
}
