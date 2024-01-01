import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitlePageComponent } from '../../components/title-page/title-page.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [HeaderComponent,TitlePageComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {

}
