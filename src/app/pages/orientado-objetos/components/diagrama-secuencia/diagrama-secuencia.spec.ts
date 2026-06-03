import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaSecuencia } from './diagrama-secuencia';

describe('DiagramaSecuencia', () => {
  let component: DiagramaSecuencia;
  let fixture: ComponentFixture<DiagramaSecuencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramaSecuencia],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramaSecuencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
