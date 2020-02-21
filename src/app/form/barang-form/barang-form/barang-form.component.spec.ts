import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangFormComponent } from './barang-form.component';

describe('BarangFormComponent', () => {
  let component: BarangFormComponent;
  let fixture: ComponentFixture<BarangFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
