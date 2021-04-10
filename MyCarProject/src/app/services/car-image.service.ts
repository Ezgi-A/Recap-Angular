import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44391/api/carimages/";

  constructor(private httpClient:HttpClient) { }

  getByImagesByCarId(carId:number){
    let newPath=this.apiUrl+"getcarlistbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getAll(){
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);

  }
}
