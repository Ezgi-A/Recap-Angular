import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:Rental[]=[];
dataLoaded=false;
customerId:number;
rentDate:Date;
returnDate:Date;
rental:Rental;
isRented:boolean = false;
@Input() carforrental:Car;
  constructor(private RentalService:RentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.RentalService.getRentals().subscribe((response)=>
    { this.rentals=response.data;
      this.dataLoaded=true;

    })
  }
  createRent(){
    let rent:Rental={
      carId:this.carforrental.carId,
      customerID:this.customerId,
      rentDate:this.rentDate,
      returnDate:this.returnDate,
      price:this.carforrental.dailyPrice
   
   }
   this.rental=rent;
   
   this.toastrService.success("Araba kiralama talebi alındı.");
  }

}
