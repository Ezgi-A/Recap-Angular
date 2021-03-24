import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creditCardNumber:string;
  expirationDate:Date;
  securityCode:string;

  @Input() rentForPayment:Rental;
  constructor(private rentalService:RentalService,
    private paymentService:PaymentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  addPayment(){
    let rent:Rental=this.rentForPayment;
    let payment:Payment={
      creditCardNumber:this.creditCardNumber,
      expirationDate:this.expirationDate,
      securityCode:this.securityCode,
      price:this.rentForPayment.price,
      customerID:this.rentForPayment.customerID

    }
    this.paymentService.addPayment(payment).subscribe((response)=>{
      this.toastrService.success("Ödemeniz alındı");

    })
    this.rentalService.addRentals(rent).subscribe((response)=> {
      this.toastrService.success("Kiralama başarılı.");
    })
  }

}
