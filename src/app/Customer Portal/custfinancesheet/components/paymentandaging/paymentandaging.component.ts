import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentandaging',
  templateUrl: './paymentandaging.component.html',
  styleUrls: ['./paymentandaging.component.css']
})
export class PaymentandagingComponent implements OnInit {
  uname;
  payment_aging;
  companycode='SA01';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/getpaymentaging',{uname:this.uname,companycode:this.companycode}).subscribe((data)=>{
      console.log(data);
      this.payment_aging= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_GET_PAYMENT_AGING_SUJ.Response']['IT_DETAILS']['item'];
      console.log(this.payment_aging);
    });
  }

}
