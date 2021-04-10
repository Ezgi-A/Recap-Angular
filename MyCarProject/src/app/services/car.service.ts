import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ResponseModel } from '../models/responseModel';


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
  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId;
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
  getCarBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getbybrandandcolor?brandId="+brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  }
  add(car:Car):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
  update(car:Car):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
}
