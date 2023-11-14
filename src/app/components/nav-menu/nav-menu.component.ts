import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit{
  constructor(private navbarService: NavbarService){  }
  navbarStatus: boolean = false;

  ngOnInit(): void {
    this.getNavbarStatus()
   }

  getNavbarStatus(){
    this.navbarService.currentNavbar$.subscribe({
      next:(estatus) => {
        this.navbarStatus = estatus;
      }
    })
   }

   setActive() : void {
    this.navbarService.setNavbar(!this.navbarStatus)
   }
  }

