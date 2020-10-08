import { Component, OnInit, Input } from '@angular/core';
import { MessageServiceService } from './../message-service.service';
import { Messageservice2Service } from './../messageservice2.service';
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  tempMessage:string;
  message1:string;
  @Input() isSend;
  message1arr=[];
  message2arr=[];
  count=0;
    constructor(private messageService: MessageServiceService, private messageservice1 : Messageservice2Service) {
   }
  ngOnInit(): void {
    this.messageService.messageBox.subscribe(message => this.message1arr=this.messageService.getMessage());
    console.log(this.message1arr);
    this.messageservice1.messageBox1.subscribe(message => this.message1=message)
  }
  onSend()
  {
    this.message1=this.tempMessage;
    this.messageservice1.setMessage(this.message1);
    this.tempMessage="";
    this.message2arr[this.count]=this.message1;
    this.count++;
  }
}
