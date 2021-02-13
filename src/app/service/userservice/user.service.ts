import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registaration = (data) => {
    return this.httpService.post('user/userSignUp', data)
  }

  login = (data) => {
    return this.httpService.post('user/login', data)
  }

  forgotPassword = (data) => {
    return this.httpService.post('user/reset', data)
  }

  resetPassword = (token, data) => {
    let url = 'user/reset-password';
    console.log(data)
    return this.httpService.encodedPost(url, data, token)
  }

}