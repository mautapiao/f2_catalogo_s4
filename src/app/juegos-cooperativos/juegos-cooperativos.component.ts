import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';

@Component({
  standalone: true,
  selector: 'app-juegos-cooperativos',
  imports: [CardJuegoComponent,CommonModule],
  templateUrl: './juegos-cooperativos.component.html',
  styleUrl: './juegos-cooperativos.component.css'
})
export class JuegosCooperativosComponent {

juegos = [
  {
    titulo: 'Pandemic',
    descripcion: 'Trabajen juntos para salvar al mundo de cuatro enfermedades mortales.',
    imagen: 'img/pandemic.png',
    precioActual: 48000,
    precioOriginal: 60000,
    descuento: 20,
  },
  {
    titulo: 'Forbidden Island',
    descripcion: 'Explora la isla misteriosa y recuperen los terosos antes de que se hunda.',
    imagen: 'img/forbidden.png',
    precioActual: 35000,
    precioOriginal: 0,
    descuento:0,
  },
  {
    titulo: 'Flash Point',
    descripcion: 'Conviértanse en bomberos y salven vidas en edificios en llamas.',
    imagen: 'img/flashpoint.png',
    precioActual: 40050,
    precioOriginal: 45000,
    descuento:11,
  }
];
}
