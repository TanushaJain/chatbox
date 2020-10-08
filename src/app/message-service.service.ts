import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messageHolder =new BehaviorSubject("");
  messageBox=this.messageHolder.asObservable();
  message=[];
  constructor(private http: HttpClientModule) { }
  setMessage(message)
  {
    this.messageHolder.next(message);
    this.message.push(message);
  }
  getMessage()
  {
    return this.message;
  }
}
