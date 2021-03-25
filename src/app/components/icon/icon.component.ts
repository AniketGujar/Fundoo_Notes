import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private noteService: NotesServiceService, public dialog: MatDialog,private dataService: DataService) { }

  @Output() colorChange = new EventEmitter();
  message:any;
  color: string = "#FFFFFF";

  ngOnInit(): void {

  }

  getId = (val) => {
    let card;
    let color;

    setTimeout(() => {
      card = localStorage.getItem('card');
      console.log("ID", card)
      if (val == "archive") {
        this.archiveNote(card);
      } else if (val == "trash") {
        this.trashNote(card);
      } else if (val == "delete") {
        this.deleteNote();
      } else {
        this.changeColor(val, card)
      }
      setTimeout(() => {
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
      this.openSnackBar('Note Archived', 'Close');
      this.dataService.sendMessage({"message":"relaod"})
    }, (error) => {
      this.openSnackBar('Note Archived', 'Close');
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
      this.openSnackBar('Note Trash', 'Close');
    }, (error) => {
      this.openSnackBar('Note Trash', 'Close');
      console.log("Note Trash Failed", error);
    })
  }

  deleteNote = () => {
    let a= localStorage.getItem('card');
    let data = {
      "noteIdList": [a],
      "isDeleted": true
    }
    this.noteService.delete(data).subscribe((response) => {
      console.log("Delete Sucessfully", response);
      this.openSnackBar('Deleted','Close');
    },(error)=>{
      this.openSnackBar('Delete Failed','Close');
      console.log("Delete Failed", error);
    })
  }

  openSnackBar = (message, action) => {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

  changeColor(color, card) {
    this.color = color;
    console.log(this.color);
    localStorage.setItem('color', this.color);

    let data = {
      "noteIdList": [card],
      "color": this.color
    }
    this.noteService.colorChange(data).subscribe((response) => {
      console.log("Color Channg ged Sucessfully", response);
      this.colorChange.emit({"message":"relaod by using event emitter"})
    }, (error) => {
      console.log("Color change failed", error);
    })
  }

  openCollaboratorDialog(): void {
    let dialogRef = this.dialog.open(CollaboratorComponent, {
      height: 'auto',
      width: '550px'
    });
  }
}
