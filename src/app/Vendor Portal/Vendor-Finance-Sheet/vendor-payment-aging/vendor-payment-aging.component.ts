import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-payment-aging',
  templateUrl: './vendor-payment-aging.component.html',
  styleUrls: ['./vendor-payment-aging.component.css']
})
export class VendorPaymentAgingComponent implements OnInit {

  uname;
  payment_aging;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/vendor-paymentaging',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.payment_aging= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_PAYMENT_AGING_SUJ.Response']['IT_OUTPUT_T']['item'];
      console.log(this.payment_aging);
    });
  }

}
