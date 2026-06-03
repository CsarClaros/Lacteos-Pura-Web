import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaClases } from './diagrama-clases';

describe('DiagramaClases', () => {
  let component: DiagramaClases;
  let fixture: ComponentFixture<DiagramaClases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramaClases],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramaClases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
