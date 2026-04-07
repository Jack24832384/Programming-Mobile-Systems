import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySecurityComponent } from './privacy-security.component';

describe('PrivacySecurityComponent', () => {
  let component: PrivacySecurityComponent;
  let fixture: ComponentFixture<PrivacySecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacySecurityComponent]
    });
    fixture = TestBed.createComponent(PrivacySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
