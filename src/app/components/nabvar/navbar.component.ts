import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() openMenu = new EventEmitter<boolean>();

  public active : boolean = false;
   constructor() {}
   ngOnInit(): void {}

   setActive() : void {
    this.active = !this.active
    this.openMenu.emit(this.active)
   }
}
