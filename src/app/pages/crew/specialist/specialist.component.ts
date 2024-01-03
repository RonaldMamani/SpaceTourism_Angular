import { Component } from '@angular/core';
import { NavCrewComponent } from '../../../components/nav-crew/nav-crew.component';
import { PersonInfoComponent } from '../../../components/person-info/person-info.component';

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [NavCrewComponent, PersonInfoComponent],
  templateUrl: './specialist.component.html',
  styleUrl: './specialist.component.scss'
})
export class SpecialistComponent {

}
