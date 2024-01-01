import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitlePageComponent } from '../../components/title-page/title-page.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [HeaderComponent,TitlePageComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {

}
