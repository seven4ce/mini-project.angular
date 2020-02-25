import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiListComponent } from './transaksi-list.component';

describe('TransaksiListComponent', () => {
  let component: TransaksiListComponent;
  let fixture: ComponentFixture<TransaksiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
