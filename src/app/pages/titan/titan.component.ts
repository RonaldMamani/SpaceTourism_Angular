import { Component } from '@angular/core';
import { NavPlanetsComponent } from '../../components/nav-planets/nav-planets.component';
import { PlanetInfoComponent } from '../../components/planet-info/planet-info.component';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [NavPlanetsComponent, PlanetInfoComponent],
  templateUrl: './titan.component.html',
  styleUrl: './titan.component.scss'
})
export class TitanComponent {

}
