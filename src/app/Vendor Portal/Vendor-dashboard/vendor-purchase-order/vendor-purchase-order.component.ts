import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-purchase-order',
  templateUrl: './vendor-purchase-order.component.html',
  styleUrls: ['./vendor-purchase-order.component.css']
})
export class VendorPurchaseOrderComponent implements OnInit {

  uname;
  head;
  header;
  item;
  filteredData;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.header=true;
    this.http.post('http://localhost:3000/vendor-purchaseorder',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.head= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_PURCHASE_ORDER_SUJ.Response']['IT_HEADER_PO_T']['item'];
      this.item= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_PURCHASE_ORDER_SUJ.Response']['IT_ITEMS_PO_T']['item'];
    });
  }
  display(headValue){
    this.header=false;
    console.log(headValue);
    this.filteredData=this.item.filter((x)=>x.PO_NUMBER._text==headValue);
    console.log(this.filteredData);
  }
  back(){
    this.header=true;

  }

}
