import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-profile-detail',
  templateUrl: './vendor-profile-detail.component.html',
  styleUrls: ['./vendor-profile-detail.component.css']
})
export class VendorProfileDetailComponent implements OnInit {
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
  constructor(private http:HttpClient) {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/vendor-profiledetail',{uname:this.uname}).subscribe((data)=>{
      this.id=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].VENDORID._text;
      this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].FNAME._text;
      this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].LNAME._text;
      this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].CITY._text;
      this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].TELEPHONE._text;
      this.address=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].ADDRESS._text;
      this.district=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].DISTRICT._text;
      this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].COUNTRY._text;
      this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']['E_DETAILS'].PINCODE._text;
      sessionStorage.setItem("vid",this.id);
      sessionStorage.setItem("vfname",this.fname);
      sessionStorage.setItem("vlname",this.lname);
      sessionStorage.setItem("vcity",this.city);
      sessionStorage.setItem("vaddress",this.address);
      sessionStorage.setItem("vdistrict",this.district);
      sessionStorage.setItem("vpincode",this.pincode);
      sessionStorage.setItem("vmobile",this.mobile);
      sessionStorage.setItem("vcountry",this.country);
    });
   }

  ngOnInit(): void {
  }

}
