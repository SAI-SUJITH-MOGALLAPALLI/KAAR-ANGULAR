import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  back:string = "https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg";
  uname;
  pwd;
  name;
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(private http:HttpClient ,private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    
  }
  // getresult(f){
  //   this.uname=f.value.uname;
  //   this.pwd=f.value.pwd;
    
  //   this.http.post('http://localhost:3000/login',{uname:this.uname,pwd:this.pwd}).subscribe((data)=>{
  //     console.log(data);
  //     this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_LOGIN_SUJ.Response'].E_NAME._text;
  //     if(this.name !='invalid'){
  //       sessionStorage.setItem('uname',this.uname);
  //       alert("Welcome " + this.name);
  //       this.router.navigate(['/dashboard']);
  //     } 
  //     else{
  //       alert("Invalid User");
  //     }
  //   });
  
    getresult(f) {
      localStorage.setItem('portal',"customer");
      if (!f.valid) {
        this.isFormValid = true;
        this.areCredentialsInvalid = false;
        return;
      }
      this.checkCredentials(f);
    }
  
    private checkCredentials(signInForm) {
      const signInData = new SignInData(signInForm.value.uname, signInForm.value.pwd);
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