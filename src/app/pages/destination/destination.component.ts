import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitlePageComponent } from '../../components/title-page/title-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, TitlePageComponent],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {

}
