import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key:string){
    // return JSON.parse(localStorage.getItem(key)!);
    var result=localStorage.getItem(key);
    if(result){
      return result;
    }else{
      return undefined;
    }
  }
  remove(key:string){
    localStorage.removeItem(key);
  }
  set(key:string,value:string){
    localStorage.setItem(key,value);
  }
}
