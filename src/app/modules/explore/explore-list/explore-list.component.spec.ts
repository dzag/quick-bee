import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreListPage } from './explore-list.page';

describe('ExploreListPage', () => {
  let component: ExploreListPage;
  let fixture: ComponentFixture<ExploreListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
