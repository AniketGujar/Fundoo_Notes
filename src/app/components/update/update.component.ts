import { Component, OnInit, Inject } from '@angular/core';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../displaynotes/displaynotes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  noteData;
  constructor(private router: Router,private noteService: NotesServiceService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.title = data.title;
    this.description = data.description;
    this.noteData=data;
  }

  title: String;
  description: String;
  id: String;
  color:String="#ffffff";

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  update = () => {
    console.log(localStorage.getItem('color'))
    if(localStorage.getItem('color')){
      this.color=localStorage.getItem('color');
      localStorage.removeItem('color');
    }
    let data = {
      noteId: this.noteData.id,
      title: this.title,
      description: this.description,
    }
    console.log("updateData: ",data)

    this.noteService.updateNote(data).subscribe((response) => {
      console.log(" Updated Note Sucessfully", response);
      this.router.navigate(['/dashboard/notes']);
    })
  }
}