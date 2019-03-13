import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMainPage } from './explore-main.page';

describe('ExploreMainPage', () => {
  let component: ExploreMainPage;
  let fixture: ComponentFixture<ExploreMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
