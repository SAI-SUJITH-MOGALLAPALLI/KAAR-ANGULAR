import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-invoice-details',
  templateUrl: './vendor-invoice-details.component.html',
  styleUrls: ['./vendor-invoice-details.component.css']
})
export class VendorInvoiceDetailsComponent implements OnInit {

  invoiceNumber;
 
  uname;
 
  year;
 
  inv_data;
 
  PathReportString;
  constructor(private router: Router, private http: HttpClient,private sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
  }
  get_invoice(){
 
    this.http.post('http://localhost:3000/vendor-invoice', { uname: this.uname,invoiceNumber:this.invoiceNumber, year:this.year}).subscribe((data) => {
 
      console.log(data);
 
      this.inv_data = data['SOAP:Envelope']['SOAP:Body']['ns0:ZFI_VENDOR_CALL_INVOICE_SUJ.Response']['E_PDF']._text;
 
      console.log(this.inv_data);
 
      this.PathReportString = 'data:application/pdf;base64,'+(this.sanitizer.bypassSecurityTrustResourceUrl(this.inv_data) as any).changingThisBreaksApplicationSecurity;
 
      document.getElementById('inv').setAttribute("src",this.PathReportString);
 
    })


 
  }

}
