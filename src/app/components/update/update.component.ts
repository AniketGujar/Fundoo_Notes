import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/service/notesService/notes-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private noteService:NotesServiceService) { }

  title:String;
  description:String;
  id:String;

  ngOnInit(): void {
  }

  update=()=>{
    let data = {
      noteId: this.id,
      title: this.title,
      description: this.description,
    }

    this.noteService.updateNote(data).subscribe((response) => {
      console.log(" Updated Note Sucessfull", response);
    })
  }
}
