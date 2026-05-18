import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informazioni } from './informazioni';

describe('Informazioni', () => {
  let component: Informazioni;
  let fixture: ComponentFixture<Informazioni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informazioni],
    }).compileComponents();

    fixture = TestBed.createComponent(Informazioni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
