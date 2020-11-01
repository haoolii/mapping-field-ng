import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapping-field-file-upload',
  templateUrl: './mapping-field-file-upload.component.html',
  styleUrls: ['./mapping-field-file-upload.component.scss']
})
export class MappingFieldFileUploadComponent implements OnInit {

  file: File = null;
  name = '';

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<MappingFieldFileUploadComponent>,
  ) { }

  ngOnInit(): void {
  }

  fileChange(target: HTMLInputElement): void {
    const file = target.files[0];
    this.file = file;
    target.value = '';
  }

  upload(): void {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('name', this.name);
    this.http.post(`${environment.apiDomain}`, formData)
        .subscribe(response => {
          this.dialogRef.close();
        });
  }
}
