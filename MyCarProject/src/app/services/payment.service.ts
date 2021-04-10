
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }
  
 

  apiUrl= "https://localhost:44391/api/"

  addPayment(payment:Payment):Observable<ResponseModel>{
    
   
    let newPath=this.apiUrl+"payments/add";
    return this.httpClient.post<ResponseModel>(newPath,payment);

  }

  

 


}
