import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadLinkComponent } from './bad-link.component';

describe('BadLinkComponent', () => {
  let component: BadLinkComponent;
  let fixture: ComponentFixture<BadLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
