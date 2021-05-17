import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'XLSX';
@Component({
  selector: 'app-masterdataupload',
  templateUrl: './masterdataupload.component.html',
  styleUrls: ['./masterdataupload.component.css']
})
export class MasterdatauploadComponent implements OnInit {
  data;
  xl;
  sra = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  getupload() {
    for (let suj of this.data) {
      this.http.post("http://localhost:3000/masterdata", suj).subscribe((res_data) => {

        this.xl = res_data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_MASTERDATA_SUJ.Response']['E_ID']._text;

        this.sra.push(this.xl);
        console.log(this.sra);

      })
    }
  }
}
