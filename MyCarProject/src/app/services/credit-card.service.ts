import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  apiUrl = "https://localhost:44391/api/";

  constructor(private httpClient:HttpClient) { }
  add(creditCard:CreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"creditcards/add",creditCard);
  }
  delete(creditCard:CreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"creditcards/delete",creditCard);
  }
  update(creditCard:CreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"creditcards/update",creditCard);
  }
  getByCustomerId(customerId:number):Observable<ListResponseModel<CreditCard>>{
    return this.httpClient.get<ListResponseModel<CreditCard>>(this.apiUrl+"creditcards/getbycustomerid?customerId="+customerId);
  }
  getByCardId(cardId:number):Observable<SingleResponseModel<CreditCard>>{
    return this.httpClient.get<SingleResponseModel<CreditCard>>(this.apiUrl+"creditcards/getbyid?cardId="+cardId);

  }
}
