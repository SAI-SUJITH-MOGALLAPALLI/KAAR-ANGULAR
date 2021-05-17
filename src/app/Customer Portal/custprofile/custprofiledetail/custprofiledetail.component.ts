import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custprofiledetail',
  templateUrl: './custprofiledetail.component.html',
  styleUrls: ['./custprofiledetail.component.css']
})
export class CustprofiledetailComponent implements OnInit {
  uname;
  fname;
  lname;
  city;
  mobile;
  state;
  street;
  country;
  pincode;
  constructor(private http:HttpClient) {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/custprofiledetail',{uname:this.uname}).subscribe((data)=>{
      this.fname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].F_NAME._text;
      this.lname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].L_NAME._text;
      this.city=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].CITY._text;
      this.mobile=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].MOBILE._text;
      this.street=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].STREET._text;
      this.state=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].STATE._text;
      this.country=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].COUNTRY._text;
      this.pincode=data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_CUST_PROFILE_DETAIL_SUJ.Response']['E_CUSTDETAIL'].PIN_CODE._text;
      sessionStorage.setItem("fname",this.fname);
      sessionStorage.setItem("lname",this.lname);
      sessionStorage.setItem("city",this.city);
      sessionStorage.setItem("street",this.street);
      sessionStorage.setItem("state",this.state);
      sessionStorage.setItem("pincode",this.pincode);
      sessionStorage.setItem("mobile",this.mobile);
      sessionStorage.setItem("country",this.country);
    });
   }

  ngOnInit(): void {
  }


}
