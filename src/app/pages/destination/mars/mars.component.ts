import { Component } from '@angular/core';
import { PlanetInfoComponent } from '../../../components/planet-info/planet-info.component';
import { NavPlanetsComponent } from '../../../components/nav-planets/nav-planets.component';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [NavPlanetsComponent , PlanetInfoComponent],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss'
})
export class MarsComponent {

}
