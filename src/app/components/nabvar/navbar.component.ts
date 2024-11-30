import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarStatus: boolean = false;
  actualSection: string = '';

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.getNavbarStatus();
  }

  handleClick(section: string): void {
    this.actualSection = section;
  }

  getNavbarStatus() {
    this.navbarService.currentNavbar$.subscribe({
      next: (estatus) => {
        this.navbarStatus = estatus;
      },
    });
  }

  setActive(): void {
    this.navbarService.setNavbar(!this.navbarStatus);
  }
}
