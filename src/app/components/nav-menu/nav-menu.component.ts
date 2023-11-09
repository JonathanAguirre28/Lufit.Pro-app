import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input() isOpen: boolean = false;

  constructor (public router: Router){}

  aboutMe() {
    console.log('click')
    this.router.navigate(['.'], {
      fragment: 'about-me' 
    })
  }
}
