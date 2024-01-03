import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTechComponent } from './nav-tech.component';

describe('NavTechComponent', () => {
  let component: NavTechComponent;
  let fixture: ComponentFixture<NavTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
