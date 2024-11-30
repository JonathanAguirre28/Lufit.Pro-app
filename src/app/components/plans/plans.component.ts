import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  imagen: string = '';
  imageMobile: string = '';
  titulo: string = '';
  span: string = '';
  subtitulo: string = '';
  text: string = '';

  cards = [
    {
      imagen: 'assets/card-images/card1.png',
      titulo: 'ENTRENAMIENTO PERSONALIZADO',
      subtitulo: 'Plan por 30 días adaptado a tus necesidades y preferencias.',
      text: 'Plan por 30 días adaptado a tus necesidades y preferencias. Acompañamiento presencial en gimnasio.',
      message:
        'https://wa.me/5493813043142?text=Hola Luciana, me interesa preguntar por "Plan por 30 días - ENTRENAMIENTO PERSONALIZADO"',
    },
    {
      imagen: 'assets/card-images/card2.png',
      titulo: 'ENTRENAMIENTO PERSONALIZADO ONLINE',
      span: 'EN GIMNASIO',
      subtitulo:
        'Entrena conmigo donde estés. Plan bimestral adaptado a tus necesidades.',
      text: 'Entrena conmigo donde estés. Plan bimestral adaptado a tus necesidades. Seguimiento integral online.',
      message:
        'https://wa.me/5493813043142?text=Hola Luciana, me interesa preguntar por "Plan bimestral ONLINE- ENTRENAMIENTO EN GIMNASIO"',
    },
    {
      imagen: 'assets/card-images/card3.png',
      titulo: 'ENTRENAMIENTO PERSONALIZADO ONLINE',
      span: 'EN TU CASA',
      subtitulo:
        'Plan bimestral para entrenar conmigo con los materiales que tengas en casa.',
      text: 'Plan bimestral para entrenar  conmigo con los materiales que tengas en casa. Seguimiento integral online.',
      message:
        'https://wa.me/5493813043142?text=Hola Luciana, me interesa preguntar por "Plan bimestral ONLINE- ENTRENAMIENTO EN CASA"',
    },
  ];
}
