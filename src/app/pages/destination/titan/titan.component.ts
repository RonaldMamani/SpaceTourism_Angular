import { Component } from '@angular/core';
import { PlanetInfoComponent } from '../../../components/planet-info/planet-info.component';
import { NavPlanetsComponent } from '../../../components/nav-planets/nav-planets.component';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [NavPlanetsComponent, PlanetInfoComponent],
  templateUrl: './titan.component.html',
  styleUrl: './titan.component.scss'
})
export class TitanComponent {

}
