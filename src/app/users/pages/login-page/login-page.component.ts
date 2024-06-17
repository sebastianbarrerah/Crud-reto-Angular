import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginUser } from '../../interfaces/user-interface';
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {
  // Formulario Reactivo
  constructor(private form:FormBuilder){}
  public myForm:FormGroup = this.form.group({
    email: ["",[ Validators.required, Validators.email]],
    password: ["",[ Validators.required]],
  })
  
  public userLogin:LoginUser = {email: '', password: ''}

  dataForm():void{
    if(!this.myForm.valid) return
    this.userLogin.email = this.myForm.controls['email'].value;
    this.userLogin.password = this.myForm.controls['password'].value;    
    this.myForm.reset()
  }
}
