import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPlanetsComponent } from './nav-planets.component';

describe('NavPlanetsComponent', () => {
  let component: NavPlanetsComponent;
  let fixture: ComponentFixture<NavPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavPlanetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
