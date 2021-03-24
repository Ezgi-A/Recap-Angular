export interface Payment{
    creditCardId?:number;
    customerID:number;
    creditCardNumber:string;
    price:number;
    expirationDate:Date;
    securityCode:string;
}
