import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../../service/notesService/notes-service.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteService: NotesServiceService) { }

  archiveNotes;
  ngOnInit(): void {
    this.archive();
  }

  archive = () => {
    this.noteService.arhiveNotes().subscribe((res) => {
      console.log("Get Archive Notes ", res['data'].data);
      this.archiveNotes = res['data'].data;
    }, (error) => {
      console.log("Get Archive Notes ", error);
    })
  }

  archiveNotePost=(data)=>{
    this.noteService.postArchive(data).subscribe((res) => {
      console.log("Post Archive Notes ", res);
    }, (error) => {
      console.log("post Archive Notes ", error);
    })
  }
}
