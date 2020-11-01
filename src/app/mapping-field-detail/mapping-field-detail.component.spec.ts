import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingFieldDetailComponent } from './mapping-field-detail.component';

describe('MappingFieldDetailComponent', () => {
  let component: MappingFieldDetailComponent;
  let fixture: ComponentFixture<MappingFieldDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingFieldDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingFieldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
