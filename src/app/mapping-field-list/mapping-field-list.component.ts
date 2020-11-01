import { MappingFieldDetailComponent } from './../mapping-field-detail/mapping-field-detail.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environments/environment';
import { MappingField } from '../interfaces/MappingField';
import { MappingFieldFileUploadComponent } from '../mapping-field-file-upload/mapping-field-file-upload.component';
export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
];


@Component({
  selector: 'app-mapping-field-list',
  templateUrl: './mapping-field-list.component.html',
  styleUrls: ['./mapping-field-list.component.scss']
})
export class MappingFieldListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'operation'];
  dataSource: MappingField[] = [];
  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMappingFieldList();
  }

  getMappingFieldList(): void{
    this.http.get<MappingField[]>(`${environment.apiDomain}/mappingFields`)
      .subscribe(mappingFields => this.dataSource = mappingFields);
  }

  openDetail(id: number): void {
    const dialogRef = this.dialog.open(
      MappingFieldDetailComponent,
      {
        width: '800px',
        height: '600px',
        data: {
          id
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.getMappingFieldList();
    });
  }

  openFileUpload(): void {
    const dialogRef = this.dialog.open(
      MappingFieldFileUploadComponent,
      {
        width: '400px',
        height: '200px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.getMappingFieldList();
    });
  }

}
