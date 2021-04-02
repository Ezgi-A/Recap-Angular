import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44391/api/";

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);

  }
  add(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
  update(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"colors/update";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }
}
