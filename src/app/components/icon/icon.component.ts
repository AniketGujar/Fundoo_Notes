import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private noteService:NotesServiceService) { }

  ngOnInit(): void {
  }

  getId = (val) => {
    let card;

    setTimeout(()=> {
      card = localStorage.getItem('card');
      console.log("ID", card)
      if(val=="archive"){
      this.archiveNote(card);
    } else if(val=="trash"){
      this.trashNote(card);
    } else if(val=="delete"){
      this.deleteNote(card);
    }
      setTimeout(()=> {
        localStorage.removeItem('card');
      }, 100);
    }, 100);
  }

  archiveNote = (card) => {
    let data = {
      "noteIdList": [card],
      "isArchived": true
    }
    this.noteService.postArchive(data).subscribe((response) => {
      console.log("Note Archived Sucessfully", response);
      this.openSnackBar('Note Archived','Close');
    },(error)=>{
      this.openSnackBar('Note Archived','Close');
      console.log("Note Archived Failed", error);
    })
  }

  trashNote = (card) => {
    let data = {
      "noteIdList": [card],
      "isDeleted": true
    }
    this.noteService.postTrash(data).subscribe((response) => {
      console.log("Note Trash Sucessfully", response);
      this.openSnackBar('Note Trash','Close');
    },(error)=>{
      this.openSnackBar('Note Trash','Close');
      console.log("Note Trash Failed", error);
    })
  }

  deleteNote = (card) => {
    let data = {
      "noteIdList": [card]
    }
    // this.noteService.postArchive(data).subscribe((response) => {
    //   console.log("Note Archived Sucessfully", response);
    //   this.openSnackBar('Note Archived','Close');
    // },(error)=>{
    //   this.openSnackBar('Note Archived','Close');
    //   console.log("Note Archived Failed", error);
    // })
  }

  openSnackBar = (message, action) => {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }
}