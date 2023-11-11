import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
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
      imagen: "assets/image/imagePlansOne.png",
      imageMobile:"assets/image/imageMobilePlansOne.png",
      titulo: "ENTRENAMIENTO PERSONALIZADO",
      span: "(tucumán)",
      subtitulo: 'Plan por 30 dias adaptado a tus necesidades y preferencias.',
      text: 'Acompañamiento presencial en gimnasio.',
    },
    {
      imagen:"assets/image/imagePlansTwo.png",
      imageMobile:"assets/image/imageMobilePlansTwo.png",
      titulo: "ENTRENAMIENTO PERSONALIZADO ONLINE",
      span: "EN GIMNASIO",
      subtitulo: "Entrena conmigo donde estés. Plan por 30 dias adaptadp a tus necesidades.",
      text: "Seguimiento integral online."
    },
    {
      imagen:"assets/image/imagePlansThree.png",
      imageMobile:"assets/image/imageMobilePlansThree.png",
      titulo: "ENTRENAMIENTO PERSONALIZADO ONLINE",
      span: "EN TU CASA",
      subtitulo: "Plan por 30 dias para entrenar conmigo con los materiales que tengas en casa.",
      text: "Seguimiento integral online."
    }
  ]

}
