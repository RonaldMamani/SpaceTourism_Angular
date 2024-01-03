import { Component } from '@angular/core';
import { NavCrewComponent } from '../../../components/nav-crew/nav-crew.component';
import { PersonInfoComponent } from '../../../components/person-info/person-info.component';

@Component({
  selector: 'app-pilot',
  standalone: true,
  imports: [NavCrewComponent, PersonInfoComponent],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.scss'
})
export class PilotComponent {

}
