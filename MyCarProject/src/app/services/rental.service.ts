import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44391/api/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+"rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  addRentals(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }


}
