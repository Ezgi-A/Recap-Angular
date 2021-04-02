import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44391/api/";

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);

  }
  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"brands/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
