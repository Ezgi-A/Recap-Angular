import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44391/api/";

  constructor(private httpClient:HttpClient) { }

  getByImagesByCarId(carId:number){
    let newPath=this.apiUrl+"getcarImagesbycarid?="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
