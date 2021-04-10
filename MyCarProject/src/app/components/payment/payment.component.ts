import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creditCardForm:FormGroup

  creditCardNumber:string;
  expirationDate:Date;
  securityCode:string;
  payment:Payment;
  creditCardId:number;

  creditCards:CreditCard[];
  creditCard:CreditCard;
  cardId:number;

  @Input() paymentForRental:Rental;
  constructor(private rentalService:RentalService,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private creditCardService:CreditCardService) { }

  ngOnInit(): void {
    this.createCreditCardForm();
    this.getCardByCustomer();
    
    console.log(this.paymentForRental);
    

  }
  addPayment(){
    let rent:Rental=this.paymentForRental;
    if(this.creditCard){
      let payment:Payment={
        creditCardNumber:this.creditCard.creditCardNumber,
        expirationDate:this.creditCard.expirationDate,
        securityCode:this.creditCard.securityCode,
        price:this.paymentForRental.price,
        customerID:this.paymentForRental.customerId
  
      }
      payment=this.payment;
      console.log(this.payment,"payment");


      
    }else {
    let payment:Payment={
      creditCardNumber:this.creditCardNumber,
      expirationDate:this.expirationDate,
      securityCode:this.securityCode,
      price:this.paymentForRental.price,
      customerID:this.paymentForRental.customerId

    }
    
    payment=this.payment;

    }
    
    
    this.paymentService.addPayment(this.payment).subscribe((response)=>{
      this.toastrService.success("Ödemeniz alındı");
      console.log(this.payment);

    })


    }
    createCreditCardForm(){
      this.creditCardForm=this.formBuilder.group({
        customerCards: ['', Validators.required],
        creditCardNumber:["",Validators.required],
        expirationDate:["",Validators.required],
        securityCode:["",Validators.required]


      })
    
    // this.rentalService.addRentals(rent).subscribe((response)=> {
    //   this.toastrService.success("Kiralama başarılı.");
    // })
  }
  save() {
    let cardModel: CreditCard = {
      creditCardNumber: this.creditCardNumber,
      expirationDate: this.expirationDate,
      securityCode: this.securityCode,
      customerID: this.paymentForRental.customerId,
    };
    this.creditCardService.add(cardModel).subscribe((response) => {
      this.toastrService.success('Kaydediliyor...');
      this.toastrService.success("Kaydedildi!");
      
    },responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }
  getCardByCustomer() {
    this.creditCardService.getByCustomerId(this.paymentForRental.customerId).subscribe(response => {
      this.creditCards= response.data;
      
      
      this.creditCards.forEach(response => {
        this.creditCardNumber = response.creditCardNumber;
        this.expirationDate = response.expirationDate;
        this.securityCode = response.securityCode;
        
      
      });

    });
  }
 
 getSelectedCardId(cardId: number) {
  if(this.cardId == cardId)
  {
    
    return cardId;
  }
  else
  {
    return undefined;
  }
}

getByCardId(cardid:number){
  cardid=this.getSelectedCardId(this.cardId);
  this.creditCardService.getByCardId(cardid).subscribe((response)=>{
    this.creditCard=response.data;
    
  })
 }
 
 

}


