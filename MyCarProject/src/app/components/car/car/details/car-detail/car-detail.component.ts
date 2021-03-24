import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages:CarImage[];
  cars: Car[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);

      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);

      }
      else{
        this.getCarsDetails();
      }
    
  })
  }
  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars= response.data;
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response)=> {
      this.cars=response.data;
    });

  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response)=> {
      this.cars=response.data
    });
  }
  getImagesByCarId(carId:number){
    this.carImageService.getByImagesByCarId(carId).subscribe((response)=> 
    {
      this.carImages=response.data;
    })
  }

}
