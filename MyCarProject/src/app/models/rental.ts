export interface Rental{
    rentalId?:number;
    carId:number;
    rentDate:Date;
    returnDate:Date;
    price:number;
    customerId:number;
}