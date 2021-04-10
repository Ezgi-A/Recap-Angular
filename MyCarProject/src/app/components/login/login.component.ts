import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:User;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,private toastrService:ToastrService,
    private userService:UserService,
    private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
    
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })

  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        this.getUserByMail(loginModel.email);
        
      },responseError=>{
        // console.log(responseError);
        this.toastrService.error(responseError.error)
      })
    }
  }
  getUserByMail(email:string){
    this.userService.getByMail(email).subscribe((response) => {
      this.user = response.data;
      console.info(this.user)
      this.localStorageService.set("name", this.user.firstName + " " + this.user.lastName);
      this.localStorageService.set("email",this.user.email)
    });
}

}
