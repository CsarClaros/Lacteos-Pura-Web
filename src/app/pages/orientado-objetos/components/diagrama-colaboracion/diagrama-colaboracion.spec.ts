import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaColaboracion } from './diagrama-colaboracion';

describe('DiagramaColaboracion', () => {
  let component: DiagramaColaboracion;
  let fixture: ComponentFixture<DiagramaColaboracion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramaColaboracion],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagramaColaboracion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
