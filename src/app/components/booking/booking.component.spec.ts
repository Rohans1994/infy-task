import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* selectedFlight = [
  {flightNo: "AI 201",origin:"PUN",destination: "DEL",departure:"10.00 AM",arrival:"12.00 PM",price:9500, isChecked:true},
  {flightNo: "AI 202",origin:"DEL",destination: "PUN",departure:"11.00 AM",arrival:"13.00 PM",price:19500, isChecked:false},
  {flightNo: "AI 203",origin:"PUN",destination: "DEL",departure:"14.00 PM",arrival:"17.00 PM",price:8500, isChecked:true},
  {flightNo: "AI 403",origin:"PUN",destination: "DEL",departure:"08.00 AM",arrival:"10.00 AM",price:8500, isChecked:true},    
  {flightNo: "AI 204",origin:"PUN",destination: "DEL",departure:"09.00 AM",arrival:"11.00 AM",price:6500, isChecked:true},
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

returnFlight = [
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
]; */



/* describe('oneWay',()=>{
  it('should return true if the counter is > 0',()=>{
    const result = BookingComponent.oneWay(selectedFlight);
    expect(result).toBeTruthy();
  });
});

describe('twoWay',()=>{
  it('should return false as the there are no return flights',()=>{
    const result = BookingComponent.twoWay(returnFlight);
    expect(result).toBeFalsy();
  });
}); */