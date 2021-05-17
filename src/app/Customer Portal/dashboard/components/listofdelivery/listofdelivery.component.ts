import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofdelivery',
  templateUrl: './listofdelivery.component.html',
  styleUrls: ['./listofdelivery.component.css']
})
export class ListofdeliveryComponent implements OnInit {
  delivery_list;
  uname;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem('uname');
    this.http.post('http://localhost:3000/getdeliverylist',{uname:this.uname}).subscribe((data)=>{
      console.log(data);
      this.delivery_list= data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_DELIVERY_GETLIST_SUJ.Response']['IT_DELIVERY_LIST']['item'];
      console.log(this.delivery_list);
    });
  }
}
