import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';

@Component({
  standalone: true,
  selector: 'app-juegos-familiares',
  imports: [CardJuegoComponent,CommonModule],
  templateUrl: './juegos-familiares.component.html',
  styleUrl: './juegos-familiares.component.css'
})
export class JuegosFamiliaresComponent {

juegos = [
  {
    titulo: 'Monopoly',
    descripcion: 'El clásico juego de bienes raíces que ha unido familias por generaciones.',
    imagen: 'img/monopoly.png',
    precioActual: 28000,
    precioOriginal: 35000,
    descuento: 20,
  },
  {
    titulo: 'Scrabble',
    descripcion: 'Forma palabras y desarrolla tu vocabulario en este juego educativo y divertido.',
    imagen: 'img/scrabble.png',
    precioActual: 32000,
    precioOriginal: 0,
    descuento:0,
  },
  {
    titulo: 'Clue',
    descripcion: 'Resuelve el misterio del asesinato en esta emocionante aventura detectivesca.',
    imagen: 'img/clue.png',
    precioActual: 30000,
    precioOriginal: 40000,
    descuento:25,
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
