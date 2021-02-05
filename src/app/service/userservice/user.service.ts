import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  registaration=(data)=>{
    return this.httpService.post('user/userSignUp',data)
  }
}
