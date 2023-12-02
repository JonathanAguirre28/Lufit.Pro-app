import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss'],
})
export class ChangesComponent {
  constructor(private router: Router) {}
  navigate() {
    window.open('https://wa.me/5493813043142?text=Hola%20Luciana,%20¡Quiero%20comenzar%20a%20mejorar%20mi%20vida!', '_blank');
  }
}
