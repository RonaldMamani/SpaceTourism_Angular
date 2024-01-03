import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-crew',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './nav-crew.component.html',
  styleUrl: './nav-crew.component.scss'
})
export class NavCrewComponent {
  path: string = '/crew'

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.path = this.router.url
    });
  }
}
