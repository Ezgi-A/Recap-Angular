import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = "https://localhost:44391/api/";

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall";
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarsDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrand(brandId:number) : Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId;
    
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
    
  }
  getCarsByColor(colorId:number) : Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId;
    
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
    
  }
}
