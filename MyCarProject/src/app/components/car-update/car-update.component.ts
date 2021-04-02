import { Component, Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  
  brands:Brand[] = [];
  colors:Color[] = [];
  carUpdateForm:FormGroup;
  @Input() carUpdate:CarDetail;

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.get();
    
    this.createCarUpdateForm();
    
    this.getBrands();
    this.getColors();
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
    })
  }
  get(){
    console.log(this.carUpdate,"aaaa");
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
      

    })

  }
  update(){
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value);
      carModel.carId=this.carUpdate.carId;
      carModel.isAvailable=this.carUpdate.isAvailable;
      this.carService.update(carModel).subscribe((response)=>{
        console.log(carModel);
        this.toastrService.success(response.message,"Başarılı");

      
      })

    }
    else{
      this.toastrService.error("Hata");
    }
    

  }

}
