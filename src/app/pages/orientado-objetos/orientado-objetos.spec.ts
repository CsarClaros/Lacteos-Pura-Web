import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientadoObjetos } from './orientado-objetos';

describe('OrientadoObjetos', () => {
  let component: OrientadoObjetos;
  let fixture: ComponentFixture<OrientadoObjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrientadoObjetos],
    }).compileComponents();

    fixture = TestBed.createComponent(OrientadoObjetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
