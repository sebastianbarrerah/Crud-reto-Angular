import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { noteInterface } from '../interfaces/notes-interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
    private BASE_URL:string = "https://crud-reto-express.onrender.com"

   // Cerrar sesión
   close(id: string | null){
    return this.http.delete(`${this.BASE_URL}/cerrar/${id}`)
  }
  // traer notas por usuario
  getNotesByUser(id:String | null):Observable<noteInterface[]>{
    return this.http.get<noteInterface[]>(`${this.BASE_URL}/notas/${id}`)
  }

  
  // Agregar nueva nota
  addNewNote(id:String | null, data:object):Observable<noteInterface>{
    return this.http.post<noteInterface>(`${this.BASE_URL}/agregar/${id}`, data)
  }

  // Actualizar una nota
  updateNote(idNota:String | null, data:object):Observable<noteInterface>{
    return this.http.patch<noteInterface>(`${this.BASE_URL}/actualizar/${idNota}`, data)
  }

  // Eliminar una nota
  removeNoteByid(idNota:String | null):Observable<noteInterface>{
    return this.http.delete<noteInterface>(`${this.BASE_URL}/borrar/${idNota}`)
  }
}
