import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-credit',
  templateUrl: './vendor-credit.component.html',
  styleUrls: ['./vendor-credit.component.css']
})
export class VendorCreditComponent implements OnInit {

  uname;
  credit;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/vendor-credit',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.credit= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_CREDIT_SUJ.Response']['IT_CREDIT_T']['item'];
      console.log(this.credit);
    });
  }
}
