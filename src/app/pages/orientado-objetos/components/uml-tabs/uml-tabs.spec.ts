import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlTabs } from './uml-tabs';

describe('UmlTabs', () => {
  let component: UmlTabs;
  let fixture: ComponentFixture<UmlTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmlTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(UmlTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
