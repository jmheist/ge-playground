import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeLookupComponent } from './exchange-lookup.component';

describe('ExchangeLookupComponent', () => {
  let component: ExchangeLookupComponent;
  let fixture: ComponentFixture<ExchangeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
