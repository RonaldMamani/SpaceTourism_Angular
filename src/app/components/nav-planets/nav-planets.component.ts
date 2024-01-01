import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-planets',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './nav-planets.component.html',
  styleUrl: './nav-planets.component.scss'
})
export class NavPlanetsComponent {
  currentPath: string = ''

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }
}
