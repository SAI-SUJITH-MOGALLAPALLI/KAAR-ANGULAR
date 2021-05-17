import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custprofileedit',
  templateUrl: './custprofileedit.component.html',
  styleUrls: ['./custprofileedit.component.css']
})
export class CustprofileeditComponent implements OnInit {

  fname;

  lname;

  city;

  country;

  state;

  pincode;

  street;

  mobile;

  uname;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.fname = sessionStorage.getItem("fname");

    this.lname =sessionStorage.getItem("lname");

    this.city = sessionStorage.getItem("city");

    this.street =sessionStorage.getItem("street");

    this.state =sessionStorage.getItem("state");

    this.pincode =sessionStorage.getItem("pincode");

    this.mobile =sessionStorage.getItem("mobile");

    this.country =sessionStorage.getItem("country");
  }
  
  update(){
    this.uname=sessionStorage.getItem('uname');
    var cust_details = {

      uname: this.uname, 
      fname: this.fname, 
      lname: this.lname, 
      street: this.street, 
      city: this.city, 
      state: this.state,
      pincode: this.pincode, 
      country: this.country, 
      mobile: this.mobile

    }
    this.http.post('http://localhost:3000/custprofileedit',cust_details).subscribe((data)=>{
      this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].F_NAME._text;
      this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].L_NAME._text;
      this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].CITY._text;
      this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].COUNTRY._text;
      this.state=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].STATE._text;
      this.street=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].STREET._text;
      this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].MOBILE._text;
      this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_EDIT_SUJ.Response'].PIN_CODE._text;
    
  })
  this.router.navigate(['/custprofiledetail']);
  }

}
