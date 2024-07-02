import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import Swal from 'sweetalert2';
import { UserNotesComponent } from '../../components/user-notes/user-notes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserNotesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  @ViewChild(UserNotesComponent) userNotas!: UserNotesComponent;
  constructor(private http: NoteService, private router: Router){}
  private userId:string | null = localStorage.getItem("user")
  public stateToggle:boolean = false;
  onLogout(){
    this.http.close(this.userId)
    localStorage.clear()
    this.router.navigate(['/'])
    Swal.fire({
      title: "Cerraste sesión con exito",
      text: "Que vuelvas pronto",
      icon: "success"
    });
  }
  public changeState: boolean = false
  mostrarBotones(){
    this.changeState = true
  }

  metodoDelete(){
    this.userNotas.deleteNote()
  }

  add(){
    this.stateToggle = true;
    console.log(this.stateToggle);
  }
}
