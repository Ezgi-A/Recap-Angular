import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
rentals:Rental[];
rentaldetails:RentalDetail[];
customerdetails:CustomerDetail[];
dataLoaded=false;
customerId:number;
rentDate:Date;
returnDate:Date;
rental:Rental;
isAvailable:boolean = false;
@Input() carAvailable:CarDetail;
  constructor(private RentalService:RentalService,
    private toastrService:ToastrService,
    private customerService:CustomerService) { }

  ngOnInit(): void {
    this.get();
    // this.getRentalDetails();
    // this.getCustomersDetail();
  }
  getRentals(){
    this.RentalService.getRentals().subscribe((response)=>
    { this.rentals=response.data;
      this.dataLoaded=true;

    })
  }
  getRentalDetails(){
    this.RentalService.getRentalDetails().subscribe((response)=>
    {
      this.rentaldetails=response.data;
    })
  }
  get(){
    console.log(this.carAvailable,"aaa");
  }

  getCustomersDetail(){
    this.customerService.getCustomersDetail().subscribe(response =>
      {
        this.customerdetails=response.data;
      })
  }
  createRent(){
    let rent:Rental={
     carId: this.carAvailable.carId,
     rentDate:this.rentDate,
     returnDate:this.returnDate,
     price:this.carAvailable.dailyPrice,
     customerId:this.customerId,
     
   
   }
   this.rental=rent;
   this.isAvailable=true;
   
   this.toastrService.success("Araba kiralama talebi alındı.");
  }

}
