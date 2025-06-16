import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';

@Component({
  standalone: true,
  selector: 'app-juegos-party',
  imports: [CardJuegoComponent,CommonModule],
  templateUrl: './juegos-party.component.html',
  styleUrl: './juegos-party.component.css'
})
export class JuegosPartyComponent {


juegos = [
  {
    titulo: 'Taboo',
    descripcion: 'Haz que tu equipo adivine la palabra sin decir las palabras prohibidas.',
    imagen: 'img/taboo.png',
    precioActual: 24960,
    precioOriginal: 32000,
    descuento: 22,
  },
  {
    titulo: 'Charades',
    descripcion: 'Actúa sin hablar y divierte a todos con tus mejores interpretaciones.',
    imagen: 'img/charades.png',
    precioActual: 20000,
    precioOriginal: 0,
    descuento:0,
  },
  {
    titulo: 'Exploding Kittens',
    descripcion: 'Un juego de cartas lleno de gatitos, explosiones y láser ocasional.',
    imagen: 'img/exploding.png',
    precioActual: 22120,
    precioOriginal: 28000,
    descuento:21,
  },
  {
    titulo: 'Uno',
    descripcion: 'El juego de cartas más popular del mundo, perfecto para toda la familia.',
    imagen: 'img/uno.png',
    precioActual: 15000,
    precioOriginal: 0,
    descuento:0,
  }
];

}
