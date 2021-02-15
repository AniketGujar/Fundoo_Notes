import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../../service/notesService/notes-service.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private noteService: NotesServiceService) { }

  trashNotes;

  ngOnInit(): void {
    this.trash();
  }

  trash = () => {
    this.noteService.trashNotes().subscribe((res) => {
      console.log("Get Trash Notes ", res['data'].data);
      this.trashNotes = res['data'].data;
    }, (error) => {
      console.log("Get Trash Notes ", error);
    })
  }
}
