import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExchangesComponent } from './list-exchanges.component';

describe('ListExchangesComponent', () => {
  let component: ListExchangesComponent;
  let fixture: ComponentFixture<ListExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
