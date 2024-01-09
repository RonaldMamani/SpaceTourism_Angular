import { Component } from '@angular/core';
import { PlanetInfoComponent } from '../../../components/planet-info/planet-info.component';
import { NavPlanetsComponent } from '../../../components/nav-planets/nav-planets.component';


@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [NavPlanetsComponent, PlanetInfoComponent],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.scss'
})
export class EuropaComponent {

}
