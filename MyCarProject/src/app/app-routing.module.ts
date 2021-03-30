import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent },
  {path:"cars", component:CarComponent },
  // {path:"cars/getcardetails", component:CarDetailComponent},
  {path:"cardetails", component:CarDetailComponent},
  // {path:"rentals", component:RentalComponent},
  // {path:"customers", component:CustomerComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cardetails/:carId",component:CarDetailComponent},
  // {path:"payments/getall",component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
