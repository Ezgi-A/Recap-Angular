export interface Payment{
    paymentId?:number;
    customerID:number;
    creditCardNumber:string;
    price?:number;
    expirationDate:Date;
    securityCode:string;
}
