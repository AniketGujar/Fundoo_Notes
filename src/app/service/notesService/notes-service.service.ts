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
}
