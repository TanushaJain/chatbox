import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { FormsModule } from '@angular/forms';
import{MessageServiceService} from './message-service.service';
import { Messageservice2Service } from './messageservice2.service';
import { User2Component } from './user2/user2.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component,
    HomeComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageServiceService,
  Messageservice2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
