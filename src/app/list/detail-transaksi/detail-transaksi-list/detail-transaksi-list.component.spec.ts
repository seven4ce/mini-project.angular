import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTransaksiListComponent } from './detail-transaksi-list.component';

describe('DetailTransaksiListComponent', () => {
  let component: DetailTransaksiListComponent;
  let fixture: ComponentFixture<DetailTransaksiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTransaksiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTransaksiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
