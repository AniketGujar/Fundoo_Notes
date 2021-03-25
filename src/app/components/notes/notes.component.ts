import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/service/dataService/data.service';
import { NotesServiceService } from '../../service/notesService/notes-service.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private noteService: NotesServiceService,private dataService: DataService) { }

  notes;
  originalNotes;
  message:any;

  ngOnInit(): void {
    this.getAllNotes();
    this.dataService.receivedMessage.subscribe((res)=>{
      console.log("messsge rececived",res);
    })
  }

  displayColor=(event)=>{
    console.log("Color changed **********",event)
  }

  openSnackBar = (message, action) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }

  getAllNotes = () => {
    this.noteService.getAllNotes().subscribe((res) => {
      console.log("Get Notes ", res['data'].data);
      this.originalNotes = res['data'].data;
      this.notes=this.originalNotes.filter((note)=>{
        if(note.isDeleted==false && note.isArchived==false){
          return note;
        }
      })
      this.notes.reverse();
    }, (error) => {
      console.log("Get Notes ", error);
    })
  }
}
