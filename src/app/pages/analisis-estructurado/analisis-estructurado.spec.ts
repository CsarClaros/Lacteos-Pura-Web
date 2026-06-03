import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisEstructurado } from './analisis-estructurado';

describe('AnalisisEstructurado', () => {
  let component: AnalisisEstructurado;
  let fixture: ComponentFixture<AnalisisEstructurado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisEstructurado],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalisisEstructurado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
