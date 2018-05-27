import { Injectable } from '@angular/core';
import { QUERY_READ_CONTAINER_REF } from '@angular/core/src/render3';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  data = [
    {flightNo: "AI 201",origin:"PUN",destination: "DEL",departure:"10.00 AM",arrival:"12.00 PM",price:9500, isChecked:false},
    {flightNo: "AI 202",origin:"DEL",destination: "PUN",departure:"11.00 AM",arrival:"13.00 PM",price:19500, isChecked:false},
    {flightNo: "AI 203",origin:"PUN",destination: "DEL",departure:"14.00 PM",arrival:"17.00 PM",price:8500, isChecked:false},
    {flightNo: "AI 403",origin:"PUN",destination: "DEL",departure:"08.00 AM",arrival:"10.00 AM",price:8500, isChecked:false},    
    {flightNo: "AI 204",origin:"PUN",destination: "DEL",departure:"09.00 AM",arrival:"11.00 AM",price:6500, isChecked:false},
    {flightNo: "AI 205",origin:"DEL",destination: "PUN",departure:"10.00 AM",arrival:"12.00 PM",price:9500, isChecked:false},
    {flightNo: "AI 206",origin:"DEL",destination: "PUN",departure:"16.00 PM",arrival:"20.00 PM",price:10500, isChecked:false},  
    {flightNo: "AI 404",origin:"DEL",destination: "PUN",departure:"18.00 PM",arrival:"22.00 PM",price:1500, isChecked:false},
    {flightNo: "AI 207",origin:"MUM",destination: "HYD",departure:"10.00 AM",arrival:"13.00 PM",price:2500, isChecked:false},
    {flightNo: "AI 208",origin:"MUM",destination: "HYD",departure:"10.00 AM",arrival:"12.00 PM",price:500, isChecked:false},
    {flightNo: "AI 209",origin:"HYD",destination: "MUM",departure:"10.00 AM",arrival:"13.00 PM",price:1500, isChecked:false},
    {flightNo: "AI 301",origin:"HYD",destination: "DEL",departure:"10.00 AM",arrival:"14.00 PM",price:1900, isChecked:false},
    {flightNo: "AI 302",origin:"BAN",destination: "CHE",departure:"10.00 AM",arrival:"16.00 PM",price:2000, isChecked:false},
    {flightNo: "AI 303",origin:"BAN",destination: "MUM",departure:"10.00 AM",arrival:"15.00 PM",price:3500, isChecked:false},
    {flightNo: "AI 304",origin:"HYD",destination: "BAN",departure:"10.00 AM",arrival:"11.00 AM",price:7500, isChecked:false},
    {flightNo: "AI 305",origin:"CHE",destination: "HYD",departure:"10.00 AM",arrival:"11.00 AM",price:8500, isChecked:false},
  ];

  dataReturn = [
    {flightNo: "AI 201",origin:"PUN",destination: "DEL",departure:"10.00 AM",arrival:"12.00 PM",price:9500, isChecked:false},
    {flightNo: "AI 202",origin:"DEL",destination: "PUN",departure:"11.00 AM",arrival:"13.00 PM",price:19500, isChecked:false},
    {flightNo: "AI 203",origin:"PUN",destination: "DEL",departure:"14.00 PM",arrival:"17.00 PM",price:8500, isChecked:false},
    {flightNo: "AI 403",origin:"PUN",destination: "DEL",departure:"08.00 AM",arrival:"10.00 AM",price:8500, isChecked:false},    
    {flightNo: "AI 204",origin:"PUN",destination: "DEL",departure:"09.00 AM",arrival:"11.00 AM",price:6500, isChecked:false},
    {flightNo: "AI 205",origin:"DEL",destination: "PUN",departure:"10.00 AM",arrival:"12.00 PM",price:9500, isChecked:false},
    {flightNo: "AI 206",origin:"DEL",destination: "PUN",departure:"16.00 PM",arrival:"20.00 PM",price:10500, isChecked:false},  
    {flightNo: "AI 404",origin:"DEL",destination: "PUN",departure:"18.00 PM",arrival:"22.00 PM",price:1500, isChecked:false},
    {flightNo: "AI 207",origin:"MUM",destination: "HYD",departure:"10.00 AM",arrival:"13.00 PM",price:2500, isChecked:false},
    {flightNo: "AI 208",origin:"MUM",destination: "HYD",departure:"10.00 AM",arrival:"12.00 PM",price:500, isChecked:false},
    {flightNo: "AI 209",origin:"HYD",destination: "MUM",departure:"10.00 AM",arrival:"13.00 PM",price:1500, isChecked:false},
    {flightNo: "AI 301",origin:"HYD",destination: "DEL",departure:"10.00 AM",arrival:"14.00 PM",price:1900, isChecked:false},
    {flightNo: "AI 302",origin:"BAN",destination: "CHE",departure:"10.00 AM",arrival:"16.00 PM",price:2000, isChecked:false},
    {flightNo: "AI 303",origin:"BAN",destination: "MUM",departure:"10.00 AM",arrival:"15.00 PM",price:3500, isChecked:false},
    {flightNo: "AI 304",origin:"HYD",destination: "BAN",departure:"10.00 AM",arrival:"11.00 AM",price:7500, isChecked:false},
    {flightNo: "AI 305",origin:"CHE",destination: "HYD",departure:"10.00 AM",arrival:"11.00 AM",price:8500, isChecked:false},
  ];

  selectedFlight=[];
  returnFlight=[];


  constructor(
    private flashMessage:FlashMessagesService ) 
    {   }


  validateSearch(query){
    
    if(!query.returnVal){
      if(query.origin === undefined || query.origin === "" || query.destination === undefined || query.destination === "" 
      || query.deptdate === undefined || query.deptdate === "" ||  query.noofpass == 0  ||  query.price == 0 )
      {
        return false;
      }
      else{
        return true;
      }
    }
    else{
      if(query.origin === undefined || query.origin === "" || query.destination === undefined || query.destination === "" 
      || query.deptdate === undefined || query.deptdate === "" || query.retdate === undefined || query.retdate === "" 
      ||  query.noofpass == 0 || query.price == 0){
        return false;
      }
      else{
        return true;
      }
    }
  }

 selectFlight(query){
    

    if(query.returnVal){
      this.twoWay(query);                                           // Get the details of flights
    }
    else{
      this.oneWay(query);
    }    
  }

  oneWay(query){
    for(var i=0; i<this.data.length;i++){
      this.selectedFlight[i]=this.data[i];                        //  Get oneWay flights details
    }
    for(var i=0; i<this.selectedFlight.length;i++){
      if(this.selectedFlight[i].origin==query.origin && this.selectedFlight[i].destination==query.destination &&
          this.selectedFlight[i].price<=query.price ){
          this.selectedFlight[i].isChecked=true;
      }
      else{
        this.selectedFlight[i].isChecked=false;
      }
    }
  }

  twoWay(query){
    for(var i=0; i<this.data.length;i++){
      this.selectedFlight[i]=this.data[i];
      this.returnFlight[i]=this.dataReturn[i];
    }
    this.oneWay(query);                                                     //  Get twoWay flights details
    for(var i=0; i<this.returnFlight.length;i++){
      if(this.returnFlight[i].origin==query.destination && this.returnFlight[i].destination==query.origin &&
          this.returnFlight[i].price<=query.price ){
          this.returnFlight[i].isChecked=true;
      }
      else{
        this.returnFlight[i].isChecked=false;
      }
    }
  }

  validateDeptDate(query){
    if(query.currDate.getFullYear() > query.deptdate.getFullYear() || query.currDate.getFullYear() < query.deptdate.getFullYear() ){
      this.flashMessage.show('Departure year is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    else if(query.currDate.getMonth() > query.deptdate.getMonth()){
      this.flashMessage.show('Departure month is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;                                                                                             // Validate the Departure date
    }
    else if(query.currDate.getUTCDate() > query.deptdate.getUTCDate()){
      this.flashMessage.show('Departure day is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    return true;
  }

  validateRetDate(query){
    if(query.retdate.getFullYear() > query.deptdate.getFullYear() || query.retdate.getFullYear() < query.deptdate.getFullYear()){
      this.flashMessage.show('Return year is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    else if(query.retdate.getMonth() < query.deptdate.getMonth()){                                                // Validate the Return date
      this.flashMessage.show('Return month is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    else if(query.retdate.getMonth() <= query.deptdate.getMonth() && query.retdate.getUTCDate() < query.deptdate.getUTCDate()){
      this.flashMessage.show('Return day is incorrect', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } 
    return true;
  }

}
