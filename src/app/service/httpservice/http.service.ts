import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.baseUrl
  constructor(private http : HttpClient) { }

  post=(url,data)=>{
    return this.http.post(this.BaseUrl + url, data)
  }
}
