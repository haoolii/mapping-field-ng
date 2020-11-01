import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingFieldComponent } from './mapping-field.component';

describe('MappingFieldComponent', () => {
  let component: MappingFieldComponent;
  let fixture: ComponentFixture<MappingFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
