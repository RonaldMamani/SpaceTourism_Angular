import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-stats',
  standalone: true,
  imports: [],
  templateUrl: './planet-stats.component.html',
  styleUrl: './planet-stats.component.scss'
})
export class PlanetStatsComponent {
  @Input() AVGDistance: string = ''
  @Input() TravelTime: string = ''
}
