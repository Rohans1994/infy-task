import { Injectable } from '@angular/core';
import { QUERY_READ_CONTAINER_REF } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  data = [
    {flightNo: "AI 201",origin:"PUN",destination: "DEL",departure:10.00,arrival:12.00,price:9500, isChecked:false},
    {flightNo: "AI 202",origin:"DEL",destination: "PUN",departure:13.00,arrival:15.00,price:19500, isChecked:false},
    {flightNo: "AI 203",origin:"PUN",destination: "DEL",departure:11.00,arrival:13.00,price:8500, isChecked:false},
    {flightNo: "AI 403",origin:"PUN",destination: "DEL",departure:11.00,arrival:13.00,price:8500, isChecked:false},
    
    {flightNo: "AI 204",origin:"PUN",destination: "DEL",departure:13.00,arrival:15.00,price:6500, isChecked:false},
    {flightNo: "AI 205",origin:"DEL",destination: "PUN",departure:6.00,arrival:8.00,price:9500, isChecked:false},
    {flightNo: "AI 206",origin:"DEL",destination: "PUN",departure:17.00,arrival:19.00,price:10500, isChecked:false},  
    {flightNo: "AI 404",origin:"DEL",destination: "PUN",departure:17.00,arrival:19.00,price:1500, isChecked:false},
    {flightNo: "AI 207",origin:"MUM",destination: "HYD",departure:8.00,arrival:10.00,price:2500, isChecked:false},
    {flightNo: "AI 208",origin:"MUM",destination: "HYD",departure:21.00,arrival:23.00,price:500, isChecked:false},
    {flightNo: "AI 209",origin:"HYD",destination: "MUM",departure:7.00,arrival:9.00,price:1500, isChecked:false},
    {flightNo: "AI 301",origin:"HYD",destination: "DEL",departure:10.00,arrival:12.00,price:1900, isChecked:false},
    {flightNo: "AI 302",origin:"BAN",destination: "CHE",departure:14.00,arrival:15.00,price:2000, isChecked:false},
    {flightNo: "AI 303",origin:"BAN",destination: "MUM",departure:10.00,arrival:12.00,price:3500, isChecked:false},
    {flightNo: "AI 304",origin:"HYD",destination: "BAN",departure:10.00,arrival:12.00,price:7500, isChecked:false},
    {flightNo: "AI 305",origin:"CHE",destination: "HYD",departure:10.00,arrival:12.00,price:8500, isChecked:false},
  ];

  dataReturn = [
    {flightNo: "AI 201",origin:"PUN",destination: "DEL",departure:10.00,arrival:12.00,price:9500, isChecked:false},
    {flightNo: "AI 202",origin:"DEL",destination: "PUN",departure:13.00,arrival:15.00,price:19500, isChecked:false},
    {flightNo: "AI 203",origin:"PUN",destination: "DEL",departure:11.00,arrival:13.00,price:8500, isChecked:false},
    {flightNo: "AI 403",origin:"PUN",destination: "DEL",departure:11.00,arrival:13.00,price:8500, isChecked:false},
    {flightNo: "AI 204",origin:"PUN",destination: "DEL",departure:13.00,arrival:15.00,price:6500, isChecked:false},
    {flightNo: "AI 205",origin:"DEL",destination: "PUN",departure:6.00,arrival:8.00,price:9500, isChecked:false},
    {flightNo: "AI 206",origin:"DEL",destination: "PUN",departure:17.00,arrival:19.00,price:1500, isChecked:false}, 
    {flightNo: "AI 404",origin:"DEL",destination: "PUN",departure:17.00,arrival:19.00,price:1500, isChecked:false}, 
    {flightNo: "AI 207",origin:"MUM",destination: "HYD",departure:8.00,arrival:10.00,price:2500, isChecked:false},
    {flightNo: "AI 208",origin:"MUM",destination: "HYD",departure:21.00,arrival:23.00,price:500, isChecked:false},
    {flightNo: "AI 209",origin:"HYD",destination: "MUM",departure:7.00,arrival:9.00,price:1500, isChecked:false},
    {flightNo: "AI 301",origin:"HYD",destination: "DEL",departure:10.00,arrival:12.00,price:1900, isChecked:false},
    {flightNo: "AI 302",origin:"BAN",destination: "CHE",departure:14.00,arrival:15.00,price:2000, isChecked:false},
    {flightNo: "AI 303",origin:"BAN",destination: "MUM",departure:10.00,arrival:12.00,price:3500, isChecked:false},
    {flightNo: "AI 304",origin:"HYD",destination: "BAN",departure:10.00,arrival:12.00,price:7500, isChecked:false},
    {flightNo: "AI 305",origin:"CHE",destination: "HYD",departure:10.00,arrival:12.00,price:8500, isChecked:false},
  ];

  selectedFlight=[];
  returnFlight=[];


  constructor() {
    for(var i=0; i<this.data.length;i++){
      this.selectedFlight[i]=this.data[i];
      this.returnFlight[i]=this.dataReturn[i];
    }
    console.log('In Constructor');
   }


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
      this.twoWay(query);
    }
    else{
      console.log('in one way');    
      //console.log(query.returnVal);
      this.oneWay(query);
    }    
  }

  oneWay(query){
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
    this.oneWay(query);
    for(var i=0; i<this.returnFlight.length;i++){
      if(this.returnFlight[i].origin==query.destination && this.returnFlight[i].destination==query.origin &&
          this.returnFlight[i].price<=query.price ){
          this.returnFlight[i].isChecked=true;
      }
      else{
        this.returnFlight[i].isChecked=false;
      }
    }
    console.log('data');
    console.log(this.data);

    console.log('select flight');
    console.log(this.selectedFlight)

    console.log('Return flight');
    console.log(this.returnFlight)

  }


}
