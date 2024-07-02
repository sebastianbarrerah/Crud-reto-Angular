import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';
import { noteInterface } from '../../interfaces/notes-interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-notes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-notes.component.html',
  styleUrl: './user-notes.component.css'
})
export class UserNotesComponent implements OnInit{
  @Input() toggle: boolean = false;
  @Output() stateBtn: EventEmitter<boolean> = new EventEmitter(false);
  constructor(private http: NoteService, private router: Router, private form: FormBuilder){}
  
  public formCreate: FormGroup = this.form.group({
    title: ['', [Validators.required, Validators.maxLength(40)]],
    description: ['', [Validators.required, Validators.maxLength(40)]],
    vencimiento: [Validators.required, Validators.maxLength(2)]
  })
  
    public dataNotes:noteInterface[] = [];
    private userId:string | null = localStorage.getItem("user")
    public changeBtn: boolean = false;

  ngOnInit(): void {
    this.http.getNotesByUser(this.userId).subscribe(data => {
      this.dataNotes = data
    })
  }

  addNote(){
   
    if(this.formCreate.invalid) return
    const data = {
      title: this.formCreate.controls['title'].value,
      description: this.formCreate.controls['description'].value,
      vencimiento: this.formCreate.controls['vencimiento'].value
    }
    
    this.http.addNewNote(this.userId, data).subscribe(res => {
      this.dataNotes.push(res)
    })
    Swal.fire({
      title: "Agregaste una nota con exito",
      text: "",
      icon: "success"
    });
    this.toggle = false;
    console.log(this.toggle);
    
  }

  getSeleccion(item:noteInterface){
    localStorage.setItem("nota", item._id)
    this.stateBtn.emit(true)
  }

  deleteNote(){
    const id = localStorage.getItem("nota");
    console.log(id);
      Swal.fire({
        title: `¿Esta seguro que quiere eliminar la nota?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No eliminar`
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.removeNoteByid(id).subscribe((data) => console.log(data)
          )
          Swal.fire(`Ha eliminado la nota ${window.location.reload()}`, "", "success");
          
        } else if (result.isDenied) {
          Swal.fire("La nota no ha sido eliminada", "", "info");
        }
      });
    }
  
}
