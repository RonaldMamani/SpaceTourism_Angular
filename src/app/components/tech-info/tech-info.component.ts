import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-info',
  standalone: true,
  imports: [],
  templateUrl: './tech-info.component.html',
  styleUrl: './tech-info.component.scss'
})
export class TechInfoComponent {
  @Input() Name: string = ''
  @Input() Descrition: string = ''
}
