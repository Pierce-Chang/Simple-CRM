import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  loginname = ['Pierce Chang', 'User'];

  @ViewChild('drawer') drawer?: MatDrawer;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Observe changes in viewport size and adjust the drawer's 'opened' state
    this.breakpointObserver.observe(['(max-width: 1100px)']).subscribe(result => {
      if (this.drawer) { // Ensure the drawer is available
        this.drawer.opened = !result.matches; // Toggle based on the viewport size
      }
    });
  }
}
