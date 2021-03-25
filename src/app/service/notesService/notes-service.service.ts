import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service'

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private httpService: HttpService) { }

  getAllNotes =()=>{
    return this.httpService.getNotes('notes/getNotesList')
  }

  createNote=(data)=>{
    return this.httpService.create('notes/addNotes',data)
  }

  arhiveNotes=()=>{
    return this.httpService.getNotes('notes/getArchiveNotesList')
  }

  postArchive=(data)=>{
    return this.httpService.archive('notes/archiveNotes',data)
  }

  updateNote=(data)=>{
    return this.httpService.update('notes/updateNotes',data)
  }

  trashNotes=()=>{
    return this.httpService.getNotes('notes/getTrashNotesList')
  }

  postTrash=(data)=>{
    return this.httpService.update('notes/trashNotes',data)
  }

  delete=(data)=>{
    return this.httpService.delete('notes/deleteForeverNotes',data)
  }

  colorChange=(data)=>{
    return this.httpService.update('notes/changesColorNotes',data)
  }
}
