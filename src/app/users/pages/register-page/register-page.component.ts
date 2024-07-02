import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterUser } from '../../interfaces/user-interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private form:FormBuilder, private http: UserService, private route: Router){}
 
  
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
    this.myForm.reset();
    this.http.dataUsers("registro", this.userRegister).subscribe( response => {
      if (response) {
        Swal.fire({
          title: "Te registraste con exito",
          text: "Ahora inicia sesión",
          icon: "success"
        });
        this.route.navigate(['/'])
      }else{
        Swal.fire({
          title: "Hubo algun error",
          text: "",
          icon: "error"
        });
      }

    })
  }
  
}
