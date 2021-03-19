import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message = new BehaviorSubject({"message":"No Message"});
  receivedMessage = this.message.asObservable();

  constructor() { }

  sendMessage(msg: any) {
    this.message.next(msg)
  }
}
