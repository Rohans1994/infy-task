import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  source: String;
  destination: String;
  returnVal: Boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onReturn(){
    this.returnVal=true;
  }
  oneWay(){
    this.returnVal=false;
  }
  onRegisterSubmit(){
   
  } 
}
