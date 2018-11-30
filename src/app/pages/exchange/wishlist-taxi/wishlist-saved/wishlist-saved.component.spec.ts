import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistSavedComponent } from './wishlist-saved.component';

describe('WishlistSavedComponent', () => {
  let component: WishlistSavedComponent;
  let fixture: ComponentFixture<WishlistSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
