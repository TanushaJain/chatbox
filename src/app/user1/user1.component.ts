import { Component, OnInit, Output } from '@angular/core';
import { MessageServiceService } from './../message-service.service';
import { Messageservice2Service } from './../messageservice2.service';
@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  tempMessage:string;
  message1:string;
  message1arr=[];
  message2arr=[];
  count=0;
  constructor(private messageService: MessageServiceService, private messageService2: Messageservice2Service) { }

  ngOnInit(): void {
    this.messageService.messageBox.subscribe(message => this.message1=message);
    this.messageService2.messageBox1.subscribe(message => this.message2arr=this.messageService2.getMessage());
    console.log(this.message2arr);
  }
  onSend()
  {
    this.message1=this.tempMessage;
    this.messageService.setMessage(this.message1);
    this.tempMessage="";
    this.message1arr[this.count]=this.message1;
    this.count++;
  }
}
