import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionSelectComponent } from './champion-select.component';

describe('ChampionSelectComponent', () => {
  let component: ChampionSelectComponent;
  let fixture: ComponentFixture<ChampionSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionSelectComponent]
    });
    fixture = TestBed.createComponent(ChampionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
