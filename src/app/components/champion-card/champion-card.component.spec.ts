import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionCardComponent } from './champion-card.component';

describe('ChampionCardComponent', () => {
  let component: ChampionCardComponent;
  let fixture: ComponentFixture<ChampionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionCardComponent]
    });
    fixture = TestBed.createComponent(ChampionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
