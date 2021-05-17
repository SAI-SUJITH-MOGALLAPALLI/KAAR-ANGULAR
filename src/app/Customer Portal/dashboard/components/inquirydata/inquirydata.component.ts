import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {

  inquiry;
  uname;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/inquiry',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.inquiry= data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_INQUIRY_SUJ.Response']['IT_FIN']['item'];
      console.log(this.inquiry);
    });
  }
}
