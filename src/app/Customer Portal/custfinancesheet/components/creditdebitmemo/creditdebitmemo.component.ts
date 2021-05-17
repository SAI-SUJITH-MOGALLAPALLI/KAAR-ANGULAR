import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditdebitmemo',
  templateUrl: './creditdebitmemo.component.html',
  styleUrls: ['./creditdebitmemo.component.css']
})
export class CreditdebitmemoComponent implements OnInit {

  uname;
  debit;
  credit;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/creditdebit',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.debit= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBIT_MEMO_SUJ.Response']['IT_CREDIT']['item'];
      console.log(this.debit);
      this.credit= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_CREDIT_DEBIT_MEMO_SUJ.Response']['IT_DEBIT']['item'];
      console.log(this.credit);
    });
  }

}
