import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsMainPage } from './feeds-main.page';

describe('FeedsMainPage', () => {
  let component: FeedsMainPage;
  let fixture: ComponentFixture<FeedsMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
