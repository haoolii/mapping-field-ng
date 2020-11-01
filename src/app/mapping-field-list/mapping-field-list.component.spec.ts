import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingFieldListComponent } from './mapping-field-list.component';

describe('MappingFieldListComponent', () => {
  let component: MappingFieldListComponent;
  let fixture: ComponentFixture<MappingFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingFieldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
