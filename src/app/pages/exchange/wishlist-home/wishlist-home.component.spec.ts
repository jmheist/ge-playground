import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistHomeComponent } from './wishlist-home.component';

describe('WishlistHomeComponent', () => {
  let component: WishlistHomeComponent;
  let fixture: ComponentFixture<WishlistHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
