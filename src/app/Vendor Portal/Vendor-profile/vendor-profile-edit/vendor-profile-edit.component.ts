import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-profile-edit',
  templateUrl: './vendor-profile-edit.component.html',
  styleUrls: ['./vendor-profile-edit.component.css']
})
export class VendorProfileEditComponent implements OnInit {

  
  id;
  district;
  address;
  uname;
  fname;
  lname;
  city;
  mobile;
  country;
  pincode;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id = sessionStorage.getItem("vid");
    this.fname = sessionStorage.getItem("vfname");

    this.lname =sessionStorage.getItem("vlname");

    this.city = sessionStorage.getItem("vcity");

    this.district =sessionStorage.getItem("vdistrict");

    this.address =sessionStorage.getItem("vaddress");

    this.pincode =sessionStorage.getItem("vpincode");

    this.mobile =sessionStorage.getItem("vmobile");

    this.country =sessionStorage.getItem("vcountry");
  }
  
  update(){
    this.uname=sessionStorage.getItem('uname');
    var cust_details = {
      id: this.id,
      uname: this.uname, 
      fname: this.fname, 
      lname: this.lname, 
      district: this.district, 
      city: this.city, 
      address: this.address,
      pincode: this.pincode, 
      country: this.country, 
      mobile: this.mobile

    }
    this.http.post('http://localhost:3000/vendor-profileupdate',cust_details).subscribe((data)=>{
      this.id=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].VENDORID._text;
      this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].FNAME._text;
      this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].LNAME._text;
      this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].CITY._text;
      this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].TELEPHONE._text;
      this.address=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].ADDRESS._text;
      this.district=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].DISTRICT._text;
      this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].COUNTRY._text;
      this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].PINCODE._text;
  })
  this.router.navigate(['/vendorprofiledetail']);
  }

}
