import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBarangComponent } from './update-barang.component';

describe('UpdateBarangComponent', () => {
  let component: UpdateBarangComponent;
  let fixture: ComponentFixture<UpdateBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
