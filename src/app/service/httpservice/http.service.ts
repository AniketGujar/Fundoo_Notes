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

  getNotes = (url) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.get(this.BaseUrl + url, options)
  }

  create = (url, data) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options)
  }

  archive = (url, data) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options)
  }

  update = (url, data) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options)
  }

  setImage = (url, data) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data'
      })
    }
    return this.http.post((this.BaseUrl + url), data, options)
  }

  delete = (url, data) => {
    let options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options)
  }
}
