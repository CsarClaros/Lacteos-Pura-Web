import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoTeorico } from './marco-teorico';

describe('MarcoTeorico', () => {
  let component: MarcoTeorico;
  let fixture: ComponentFixture<MarcoTeorico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcoTeorico],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcoTeorico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
