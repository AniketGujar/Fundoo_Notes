import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }


  post = (url, data) => {
    return this.http.post(this.BaseUrl + url, data)
  }

  encode(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  encodedPost(url, data, token) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post(this.BaseUrl + url, this.encode(data), options)
  }
}