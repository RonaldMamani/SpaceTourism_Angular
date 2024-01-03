import { Component } from '@angular/core';
import { NavCrewComponent } from '../../../components/nav-crew/nav-crew.component';
import { PersonInfoComponent } from '../../../components/person-info/person-info.component';

@Component({
  selector: 'app-engineer',
  standalone: true,
  imports: [NavCrewComponent, PersonInfoComponent],
  templateUrl: './engineer.component.html',
  styleUrl: './engineer.component.scss'
})
export class EngineerComponent {

}
