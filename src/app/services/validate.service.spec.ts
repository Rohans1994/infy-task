import { TestBed, inject } from '@angular/core/testing';

import { ValidateService } from './validate.service';



describe('ValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService]
    });
  });

  it('should be created', inject([ValidateService], (service: ValidateService) => {
    expect(service).toBeTruthy();
  }));
});

/* const query = {
  origin: "PUN",
  destination: "DEL",
  deptdate:Mon May 28 2018 00:06:11 GMT+0530,
  retdate:Wed May 30 2018 00:06:09 GMT+0530,
  price:1500,
  noofpass:1,
  returnVal:true,
  currDate:Mon May 28 2018 00:06:11 GMT+0530
}
describe('validateSearch',()=>{
  it('should return true if all fields are valid',()=>{
    const result = ValidateService.validateSearch(query);
    expect(result).toBeTruthy();
  });
});

describe('validateDeptDate',()=>{
  it('should return true if all fields are valid',()=>{
    const result = ValidateService.validateDeptDate(query);
    expect(result).toBeTruthy();
  });
});

describe('validateRetDate',()=>{
  it('should return true if all fields are valid',()=>{
    const result = ValidateService.validateRetDate(query);
    expect(result).toBeTruthy();
  });
}); */