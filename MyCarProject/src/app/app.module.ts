import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car/car/details/car-detail/car-detail.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import {ToastrModule} from "ngx-toastr";
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    FilterColorPipe,
    FilterBrandPipe,
    FilterCarPipe,
    PaymentComponent,
    
  ],
  imports: [BrowserModule, 
    AppRoutingModule,
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  ToastrModule.forRoot({
    positionClass:"toast-bottom-right"
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
