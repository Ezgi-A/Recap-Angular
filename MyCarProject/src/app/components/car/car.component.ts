import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars:Car[];
  cardetails: CarDetail[];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded=false;
  filterText="";
  brandId:number;
  colorId:number;
  
  

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private brandService:BrandService,private colorService:ColorService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarByFilter(params["brandId"],params["colorId"]);
        console.log(params["colorId"])
        console.log(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
        console.log(params["colorId"])

      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
        
      }
      else{
        this.getCarsDetails();
        this.getColors();
        this.getBrands();
      }

    })
    

    
       
      
        
        
      
  
}
 
      
  getCars() {
    
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }
  
  
  
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
       
   }
   getColors(){
    this.colorService.getColors().subscribe(response=>{
    this.colors=response.data;
    });
    }
    getCarsDetails() {
      this.carService.getCarsDetails().subscribe((response) => {
        this.cardetails= response.data;
      });
    }
    getCarsByBrand(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe((response)=> {
        this.cardetails=response.data;
        
      });
  
    }
    getCarsByColor(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe((response)=> {
        this.cardetails=response.data
      });
    }
    getCarByFilter(brandId:number,colorId:number){
      this.carService.getCarBrandAndColor(brandId,colorId).subscribe((response)=>
      {
        
        this.cardetails=response.data;
        console.log(this.cardetails);
      })
    }
    getCarDetailByCarId(carId:number){
      this.carService.getCarDetailByCarId(carId).subscribe((response)=>
      {
        this.cardetails=response.data;
        console.log(this.cardetails);
      })
    }
    getSelectedColorId(colorId: number) {
      if(this.colorId == colorId)
      {
        
        return true;
      }
      else
      {
        return false;
      }
    }
  
    getSelectedBrandId(brandId: number) {
      if(this.brandId == brandId)
      {
        
        return true;
      }
      else
      {
        return false;
      }
    }
   
  
}
