import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateCard } from './heart-rate-card';

describe('HeartRateCard', () => {
  let component: HeartRateCard;
  let fixture: ComponentFixture<HeartRateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeartRateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartRateCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
