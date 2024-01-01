import { Component } from '@angular/core';
import { NavCrewComponent } from '../../../components/nav-crew/nav-crew.component';
import { PersonInfoComponent } from '../../../components/person-info/person-info.component';

@Component({
  selector: 'app-commander',
  standalone: true,
  imports: [NavCrewComponent, PersonInfoComponent],
  templateUrl: './commander.component.html',
  styleUrl: './commander.component.scss'
})
export class CommanderComponent {

}
