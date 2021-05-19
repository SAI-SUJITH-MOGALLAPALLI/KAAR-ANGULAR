import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  back:string = "https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg";
  uname;
  pwd;
  name;
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(private http:HttpClient ,private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    
  }
  
    getresult(f) {
      if (!f.valid) {
        this.isFormValid = true;
        this.areCredentialsInvalid = false;
        return;
      }
      this.checkCredentials(f);
    }
  
    private checkCredentials(signInForm) {
      const signInData = new SignInData (signInForm.value.uname, signInForm.value.pwd);
      this.authenticationService.authenticate(signInData);
      if (!signInData.ans) {
        // console.log("Check");
        this.isFormValid = false;
        this.areCredentialsInvalid = true;
      }
    }
    isLoading=false;
    toggleLoading(){
      this.isLoading=true;
      setTimeout(()=>{
        this.isLoading=false;
        return true;
      }, 10000);
    }

}
