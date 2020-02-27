import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaFormComponent } from './harga-form.component';

describe('HargaFormComponent', () => {
  let component: HargaFormComponent;
  let fixture: ComponentFixture<HargaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HargaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
