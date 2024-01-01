import { Component, Input } from '@angular/core';
import { PlanetStatsComponent } from '../planet-stats/planet-stats.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-planet-info',
  standalone: true,
  imports: [PlanetStatsComponent, NgClass],
  templateUrl: './planet-info.component.html',
  styleUrl: './planet-info.component.scss'
})
export class PlanetInfoComponent {
  @Input() Planet: string = ''
  @Input() Descrition: string = ''
  @Input() Distance: string = ''
  @Input() Time: string = ''
}
