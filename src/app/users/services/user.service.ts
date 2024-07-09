import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // para las notas
  private BASE_URL:string = "https://crud-reto-express.onrender.com"

  constructor(private http: HttpClient){}

  // user registro y login
  dataUsers(ruta:string, data:object):Observable<UserInterface>{
    return this.http.post<UserInterface>(`${this.BASE_URL}/${ruta}`, data)
  }
}


