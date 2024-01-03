import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TitlePageComponent } from '../../components/title-page/title-page.component';
import { TechInfoComponent } from '../../components/tech-info/tech-info.component';
import { NgClass } from '@angular/common';
import { NavTechComponent } from '../../components/nav-tech/nav-tech.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgClass,HeaderComponent,TitlePageComponent, NavTechComponent, TechInfoComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {

  launch: boolean = true
  spaceport: boolean = false
  capsule: boolean = false

  showLaunch() {
    this.launch = true
    this.spaceport = false
    this.capsule = false
  }

  showSpacePort() {
    this.launch = false
    this.spaceport = true
    this.capsule = false
  }

  showCapsule() {
    this.launch = false
    this.spaceport = false
    this.capsule = true
  }
}