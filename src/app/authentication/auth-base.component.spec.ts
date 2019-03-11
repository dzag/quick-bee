import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBasePage } from './auth-base.page';

describe('AuthBasePage', () => {
  let component: AuthBasePage;
  let fixture: ComponentFixture<AuthBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
