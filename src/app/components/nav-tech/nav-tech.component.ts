import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-tech',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-tech.component.html',
  styleUrl: './nav-tech.component.scss'
})
export class NavTechComponent {
  @Input() launch: boolean = true;
  @Input() spaceport: boolean = false;
  @Input() capsule: boolean = false;

  @Output() showLaunchEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() showSpacePortEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() showCapsuleEvent: EventEmitter<void> = new EventEmitter<void>();

  showLaunch(): void {
    this.showLaunchEvent.emit();
  }

  showSpacePort(): void {
    this.showSpacePortEvent.emit();
  }

  showCapsule(): void {
    this.showCapsuleEvent.emit();
  }
}
