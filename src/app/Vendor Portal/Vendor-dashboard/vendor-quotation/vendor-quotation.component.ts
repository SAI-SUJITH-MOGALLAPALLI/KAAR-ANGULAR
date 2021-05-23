import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-quotation',
  templateUrl: './vendor-quotation.component.html',
  styleUrls: ['./vendor-quotation.component.css']
})
export class VendorQuotationComponent implements OnInit {
  uname;
  head;
  header;
  item;
  filteredData;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.header=true;
    this.http.post('http://localhost:3000/vendor-quotation',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.head= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_REQ_QUOTATION_SUJ.Response']['IT_HEADER_RFQ_T']['item'];
      this.item= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_REQ_QUOTATION_SUJ.Response']['IT_ITEM_RFQ_T']['item'];
    });
  }
  display(headValue){
    this.header=false;
    console.log(headValue);
    this.filteredData=this.item.filter((x)=>x.DOC_NUMBER._text==headValue);
    console.log(this.filteredData);
  }
  back(){
    this.header=true;

  }
}
