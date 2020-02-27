import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaListComponent } from './harga-list.component';

describe('HargaListComponent', () => {
  let component: HargaListComponent;
  let fixture: ComponentFixture<HargaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HargaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
