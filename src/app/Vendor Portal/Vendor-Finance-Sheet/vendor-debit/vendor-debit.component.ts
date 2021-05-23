import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-debit',
  templateUrl: './vendor-debit.component.html',
  styleUrls: ['./vendor-debit.component.css']
})
export class VendorDebitComponent implements OnInit {

  uname;
  debit;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/vendor-debit',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.debit= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DEBIT_SUJ.Response']['IT_DEBIT_T']['item'];
      console.log(this.debit);
    });
  }

}
