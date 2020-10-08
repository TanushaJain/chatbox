import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Messageservice2Service {
  private messageHolder1 =new BehaviorSubject("");
  messageBox1=this.messageHolder1.asObservable();
  message1=[];
  constructor(private http: HttpClientModule) { }
  setMessage(message)
  {
    this.messageHolder1.next(message);
    this.message1.push(message);
  }
  getMessage()
  {
    return this.message1;
  }
}
