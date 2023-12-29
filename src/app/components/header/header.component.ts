import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgClass,NavMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentPath: string = ''

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url;
    });
  }
}
