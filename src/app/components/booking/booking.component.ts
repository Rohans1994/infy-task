import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  origin: String;
  destination: String;
  returnVal: Boolean=false;
  price:number=0;
  noofpass:number=0;
  deptdate:Date;
  retdate:Date;
  Result: Boolean=false;
  selectedFlight=[];
  query;
  
  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {
    //this.selectedFlight=this.validateService.selectedFlight;
    //console.log('In Booking');
    //console.log(this.selectedFlight);
  }

  onReturn(){
    this.returnVal=true;
  }
  oneWay(){
    this.returnVal=false;
  }
  sliderChange(value){
    this.price=value;
  }
  onRegisterSubmit(){
    console.log('submitted');
    console.log(this.origin);
    console.log(this.destination);
    console.log(this.price);
    console.log(this.noofpass);
    console.log(this.deptdate);
    console.log(this.retdate);
    console.log(this.returnVal);

    this.query = {
      origin: this.origin,
      destination: this.destination,
      deptdate:this.deptdate,
      retdate:this.retdate,
      price:this.price,
      noofpass:this.noofpass,
      returnVal:this.returnVal
    }

    if(!this.validateService.validateSearch(this.query)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      
    }     

    this.getSelectedFlights();

  } 

  getSelectedFlights(){
    this.validateService.selectFlight(this.query);
    this.selectedFlight=this.validateService.selectedFlight;
    console.log('selected flight');
    console.log(this.selectedFlight);
  }
}
