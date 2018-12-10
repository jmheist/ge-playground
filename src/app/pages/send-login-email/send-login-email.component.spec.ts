import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLoginEmailComponent } from './send-login-email.component';

describe('SendLoginEmailComponent', () => {
  let component: SendLoginEmailComponent;
  let fixture: ComponentFixture<SendLoginEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLoginEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLoginEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
