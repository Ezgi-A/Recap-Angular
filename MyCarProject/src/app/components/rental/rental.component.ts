import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
customerdetail:CustomerDetail;
dataLoaded=false;
customerId:number;
rentDate:Date;
returnDate:Date;
rental:Rental;
isAvailable:boolean = false;
@Input() carAvailable:CarDetail;
  constructor(private rentalService:RentalService,
    private toastrService:ToastrService,
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomersDetail();
    // this.get();
    // this.getRentalDetails();
    // this.getRent();
}
  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>
    { this.rentals=response.data;
      this.dataLoaded=true;

    })
  }
  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe((response)=>
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
     customerId:this.customerId
     
   
   }
   
   this.rental=rent;
   console.log(this.rental,"aaa");
   this.isAvailable=true;

  this.rentalService.addRentals(this.rental).subscribe((response)=> {
    this.toastrService.success("Araba kiralama talebi alındı.");
  
  },responseError=>{
    console.info(responseError)
      this.toastrService.error(responseError.error.message)
  })

   
  
  }
  
  getCustomerDetailById(customerId:number){
    this.customerService.getCustomerDetailById(customerId).subscribe((response)=>{
      this.customerdetails=response.data;
      console.log(this.customerdetails);
    })

  }
  checkRental(){
    this.rentalService.addRentals(this.rental).subscribe((response)=> {
      this.toastrService.success(response.message,"");
    })

  }
  

}
