import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiFormComponent } from './transaksi-form.component';

describe('TransaksiFormComponent', () => {
  let component: TransaksiFormComponent;
  let fixture: ComponentFixture<TransaksiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
