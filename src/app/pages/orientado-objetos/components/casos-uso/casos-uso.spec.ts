import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosUso } from './casos-uso';

describe('CasosUso', () => {
  let component: CasosUso;
  let fixture: ComponentFixture<CasosUso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasosUso],
    }).compileComponents();

    fixture = TestBed.createComponent(CasosUso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
