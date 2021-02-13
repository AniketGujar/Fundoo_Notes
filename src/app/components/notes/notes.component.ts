import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService} from '../../service/notesService/notes-service.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private snackBar:MatSnackBar,private noteService: NotesServiceService) { }

  notes;
  ngOnInit(): void {
    this.getAllNotes();
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

  openSnackBar=(message,action)=>{
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }

  getAllNotes=()=>{
    this.noteService.getAllNotes().subscribe((res)=>{
      console.log("Get Notes ", res['data'].data);
      this.notes =res['data'].data;
    },(error)=>{
      console.log("Get Notes ", error);
    })
  }
}
