import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAdminComponent } from './exchange-admin.component';

describe('ExchangeAdminComponent', () => {
  let component: ExchangeAdminComponent;
  let fixture: ComponentFixture<ExchangeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
