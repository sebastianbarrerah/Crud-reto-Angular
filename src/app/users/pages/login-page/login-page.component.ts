import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginUser } from '../../interfaces/user-interface';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {
  // Formulario Reactivo
  constructor(private form:FormBuilder, private http: UserService, private route: Router){}
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
    this.http.dataUsers("login", this.userLogin).subscribe( response => {
      if (response) {
        Swal.fire({
          title: "Iniciaste sesión con exito",
          text: "",
          icon: "success"
        });
        localStorage.setItem("user", response._id);
        localStorage.setItem("state", "true");
        this.route.navigate(['/home'])
      }else{
        Swal.fire({
          title: "Hubo algun error, revisa tus credenciales",
          text: "",
          icon: "error"
        });
        console.log(response, "no");
      }

    })
  }

}
