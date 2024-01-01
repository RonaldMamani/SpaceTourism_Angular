import { Component } from '@angular/core';
import { PlanetInfoComponent } from '../../components/planet-info/planet-info.component';
import { NavPlanetsComponent } from '../../components/nav-planets/nav-planets.component';

@Component({
  selector: 'app-moon',
  standalone: true,
  imports: [ NavPlanetsComponent , PlanetInfoComponent],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.scss'
})
export class MoonComponent {

}
