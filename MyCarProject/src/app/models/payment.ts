export interface Payment{
    paymentId?:number;
    creditCardId?:number;
    customerId:number;
    creditCardNumber:string;
    price?:number;
    expirationDate:Date;
    securityCode:string;
}
