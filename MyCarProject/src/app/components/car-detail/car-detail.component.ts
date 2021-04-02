import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  path = "https://localhost:44391/Images/";
  cardetail:CarDetail;
  cardetails:CarDetail[];
  carImages:CarImage[];
  
  
  isAvailable:boolean;
  
  filterText="";
  
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,
    private toastrService:ToastrService,
    private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params)=>{
      if(params["carId"]){
        this.getCarDetailByCarId(params["carId"]);
        // this.getImagesByCarId(params["carId"]);
        console.log(params["carId"]);
      }
  })
  }
  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cardetails= response.data;
    });
  }
  

  getImagesByCarId(carId:number){
    this.carImageService.getByImagesByCarId(carId).subscribe((response)=> 
    {
      this.carImages=response.data;
    })
  }
  getImagePath(image:string){
    let newPath=this.path+image;
    return newPath;
  }
  
  
    getCarDetailByCarId(carId:number){
      this.carService.getCarDetailByCarId(carId).subscribe((response)=>
      {
        this.cardetail=response.data[0];
        // console.log(this.cardetail);
      })
    }
  
 
  checkStatus(isAvailable:boolean)
  {
    this.isAvailable = isAvailable;
    if(this.isAvailable == false)
    {
      this.toastrService.success("Araba kiralamaya uygun!");
      return true;

      console.log("doğru");
    }
    else{
      this.toastrService.error("Araba başka birine kiralanmıştır. Başka bir araba seçiniz!");
      return false;
    }
  }
  

}
