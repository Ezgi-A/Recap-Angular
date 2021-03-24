import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';


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
  getCarsDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrand?brandId="+brandId;
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarsByColor(colorId:number) : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId;
    
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  getCarBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandandcolor?brandId="+brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
}
