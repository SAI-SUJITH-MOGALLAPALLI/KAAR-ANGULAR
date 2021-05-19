import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  name;
  ans = false;
  isAuthenticated = false;
  login=false;
  constructor(private http:HttpClient ,private router:Router) { }
  authenticate(signInData: SignInData): void {
    this.checkCredentials(signInData);
  }
  checkCredential(signInData : SignInData){
    if (signInData.ans) {
      localStorage.setItem("uname",signInData.getLogin());
      this.isAuthenticated = true;
      this.login = true;
      console.log(this.login);
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): void {  
    this.http.post('http://localhost:3000/login',{uname:signInData.getLogin(),pwd:signInData.getPassword()}).subscribe((data)=>{
      console.log(data);
      this.name=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_LOGIN_SUJ.Response'].E_NAME._text;
      if(this.name !='Invalid Customer ID'){
        sessionStorage.setItem('uname',signInData.getLogin());
        localStorage.setItem('name',this.name);
        signInData.ans=true;
        // alert("Welcome " + this.name);
        // this.router.navigate(['dashboard']);
        this.checkCredential(signInData);
      } 
      else{
        alert("Invalid User");
        signInData.ans=false;
        this.checkCredential(signInData);
      }
    });
    // console.log(this.ans);
    // return this.ans;
  }
  logout() {
    localStorage.clear();
    this.isAuthenticated = false;
    this.login=false;
    this.router.navigate(['']);
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  loggedIn(){
    return !!localStorage.getItem("uname");
  }
}
