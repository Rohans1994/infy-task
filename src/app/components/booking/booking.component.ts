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
  returnFlight=[];
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
  onOneWay(){
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
      return false;
    }     

    this.getSelectedFlights();

  } 

  getSelectedFlights(){
    this.validateService.selectFlight(this.query);
    this.selectedFlight=this.validateService.selectedFlight;
    this.returnFlight=this.validateService.returnFlight;
    console.log('In booking');
    console.log(this.selectedFlight);
    console.log(this.returnFlight);

    if(!this.returnVal){
      this.oneWay(this.selectedFlight);
    }
    else{
      this.twoWay(this.returnFlight);
    }
  

   
    //console.log('counter'+counter+'Result'+ this.Result); 
  }

  oneWay(selectedFlight){
    var counter:number=0;
    for(var i=0; i < this.selectedFlight.length;i++){
      if(this.selectedFlight[i].isChecked==true){
          counter+=1;
      }
    }
    if(counter>0){
      this.Result=true;
    }
    else{
      this.Result=false;
      this.flashMessage.show('No Flights available for the given price range', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

  twoWay(returnFlight){
    var counter:number=0;
    for(var i=0; i < this.returnFlight.length;i++){
      if(this.returnFlight[i].isChecked==true){
          counter+=1;
      }
    }
    if(counter>0){
      this.Result=true;
    }
    else{
      this.Result=false;
      this.flashMessage.show('No Flights available for the given price range', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
