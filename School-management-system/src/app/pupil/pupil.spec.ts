import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pupil } from './pupil';

describe('Pupil', () => {
  let component: Pupil;
  let fixture: ComponentFixture<Pupil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pupil],
    }).compileComponents();

    fixture = TestBed.createComponent(Pupil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
