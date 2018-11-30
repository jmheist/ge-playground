import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTaxiComponent } from './wishlist-taxi.component';

describe('WishlistTaxiComponent', () => {
  let component: WishlistTaxiComponent;
  let fixture: ComponentFixture<WishlistTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
