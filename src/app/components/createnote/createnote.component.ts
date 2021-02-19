import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from '../../service/notesService/notes-service.service'
import { NotesComponent } from '../notes/notes.component'

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private noteService: NotesServiceService, private display: NotesComponent
  ) { }

  title: String;
  description: String;

  ngOnInit(): void {

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openSnackBar = (message, action) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }

  addNote = () => {
    let data = {
      "title": this.title,
      "description": this.description
    }

    this.noteService.createNote(data).subscribe((res) => {
      console.log("Note Added ", res)
      this.display.getAllNotes();
      this.clearInput();
    },
      (error) => {
        console.log("Error in creating note ", error);
      })
  }

  clearInput = () => {
    this.title = "";
    this.description = "";
  }

  isShown: boolean = false;

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
