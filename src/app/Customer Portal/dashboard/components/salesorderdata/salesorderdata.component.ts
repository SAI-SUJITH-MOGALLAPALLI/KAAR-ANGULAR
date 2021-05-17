import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesorderdata',
  templateUrl: './salesorderdata.component.html',
  styleUrls: ['./salesorderdata.component.css']
})
export class SalesorderdataComponent implements OnInit {

  uname;
  salesorderdata;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:3000/getsalesorderdata',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.salesorderdata= data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_SALESORDER_GETLIST_SUJ.Response']['E_SALESORDER']['item'];
      console.log(this.salesorderdata);
    });
  }

}
