import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingFieldFileUploadComponent } from './mapping-field-file-upload.component';

describe('MappingFieldFileUploadComponent', () => {
  let component: MappingFieldFileUploadComponent;
  let fixture: ComponentFixture<MappingFieldFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingFieldFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingFieldFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
