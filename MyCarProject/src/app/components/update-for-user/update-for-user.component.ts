import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-for-user',
  templateUrl: './update-for-user.component.html',
  styleUrls: ['./update-for-user.component.css']
})
export class UpdateForUserComponent implements OnInit {
updateForm:FormGroup
user:User;
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.getUser();
  }
  createUpdateForm(){
    this.updateForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]

    })

  }
  getUser(){
    this.userService.getByMail(localStorage.getItem("email")).subscribe((response)=>{
      this.user=response.data;
      this.updateForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        email:this.user.email,
        password:""
      })

      },responseError=>{
        this.toastrService.error(responseError.error.message)
    })

  }
  updateProfile(){
    if(this.updateForm.valid){
      let updateModel=Object.assign({},this.updateForm.value)
      updateModel.userId=this.user.userId;
      this.userService.update(updateModel).subscribe((response)=>{
        this.toastrService.info("Bilgileriniz güncelleniyor...");
        this.router.navigate(["login"]);
        this.toastrService.success("Tekrar giriş yapınız.");
      },responseError=>{
        this.toastrService.error(responseError.error.message);
      })

    }

  }

}
