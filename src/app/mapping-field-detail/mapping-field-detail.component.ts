import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MappingField } from '../interfaces/MappingField';

@Component({
  selector: 'app-mapping-field-detail',
  templateUrl: './mapping-field-detail.component.html',
  styleUrls: ['./mapping-field-detail.component.scss']
})
export class MappingFieldDetailComponent implements OnInit {
  displayedColumns: string[] = ['key', 'value'];
  mappingFiledObj: MappingField = null;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<MappingFieldDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.http.get<MappingField>(`${environment.apiDomain}/mappingField`, { params: {
      id: this.data.id
    }}).subscribe(mappingField => this.mappingFiledObj = mappingField);
  }

  export(): void {
    this.http.get(`${environment.apiDomain}/excel`, {
      responseType: 'blob' as 'json',
      observe: 'response',
      params: {
        id: this.data.id
      },
    }).subscribe(resp  => {
      const contentDisposition = resp.headers.get('Content-Disposition');
      const matches = /filename=\"?([^;"]+)\"?;?/g.exec(contentDisposition);
      const url = window.URL.createObjectURL(resp.body);
      const a = document.createElement('a');
      a.href = url;
      (a as any).download = matches[1];
      a.click();
      a.remove();
    });
  }

}
