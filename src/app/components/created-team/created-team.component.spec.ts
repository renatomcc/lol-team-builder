import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTeamComponent } from './created-team.component';

describe('CreatedTeamComponent', () => {
  let component: CreatedTeamComponent;
  let fixture: ComponentFixture<CreatedTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedTeamComponent]
    });
    fixture = TestBed.createComponent(CreatedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
