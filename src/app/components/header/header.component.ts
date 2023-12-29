import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavMobileComponent } from '../nav-mobile/nav-mobile.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgClass,NavMobileComponent,LinkComponent],
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
