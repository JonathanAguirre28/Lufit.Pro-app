import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LUFIT.PRO';
  icon: boolean = false;
  isOpen: boolean = false;

  onOpenMenu(event: boolean){
    this.isOpen = event;
    this.icon = event;
  }
}
