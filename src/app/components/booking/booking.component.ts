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
  retResult:Boolean=false;
  selectedFlight=[];
  returnFlight=[];
  query;
  currDate = new Date();
  
  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService

  ) { }

  ngOnInit() {  }

  onReturn(){
    this.returnVal=true;
  }

  onOneWay(){
    this.returnVal=false;
    this.retResult=false;
  }

  sliderChange(value){
    this.price=value;
  }
  
  onRegisterSubmit(){
    this.query = {
      origin: this.origin,
      destination: this.destination,
      deptdate:this.deptdate,
      retdate:this.retdate,
      price:this.price,
      noofpass:this.noofpass,
      returnVal:this.returnVal,
      currDate:this.currDate
    }


    if(!this.validateService.validateSearch(this.query)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});   // Validate all fields of form
      return false;
    } 

     if(!this.query.returnVal){
       if(!this.validateService.validateDeptDate(this.query)){    // Validate the Departure date
        return false;
       }
    } 
     else{
      if(!this.validateService.validateRetDate(this.query)){      // Validate the Return date
        return false;
      }
    } 

    this.getSelectedFlights();
  } 

  getSelectedFlights(){
    this.validateService.selectFlight(this.query);
    this.selectedFlight=this.validateService.selectedFlight;
    this.returnFlight=this.validateService.returnFlight;
                                                                        // Get the details of flights
    if(!this.returnVal){
      this.oneWay(this.selectedFlight);
    }
    else{
      this.oneWay(this.selectedFlight);
      this.twoWay(this.returnFlight);
    }    
  }

  oneWay(selectedFlight){
    var counter:number=0;
    for(var i=0; i < this.selectedFlight.length;i++){         //  Get oneWay flights details
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
      if(this.returnFlight[i].isChecked==true){             //  Get twoWay flights details
          counter+=1;
      }
    }
    if(counter>0){
      this.retResult=true;
    }
    else{
      this.retResult=false;
      this.flashMessage.show('No Flights available for the given price range', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
