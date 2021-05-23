import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-goods-receipt',
  templateUrl: './vendor-goods-receipt.component.html',
  styleUrls: ['./vendor-goods-receipt.component.css']
})
export class VendorGoodsReceiptComponent implements OnInit {

  uname;
  head;
  header;
  item;
  filteredData;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.header=true;
    this.http.post('http://localhost:3000/vendor-goodsreceipt',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.head= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_GOODS_RECEIPT_SUJ.Response']['IT_HEADER_GR_T']['item'];
      this.item= data['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_GOODS_RECEIPT_SUJ.Response']['IT_ITEMS_GR_T']['item'];
    });
  }
  display(headValue){
    this.header=false;
    console.log(headValue);
    this.filteredData=this.item.filter((x)=>x.MAT_DOC._text==headValue);
    console.log(this.filteredData);
  }
  back(){
    this.header=true;

  }

}
