import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';

@Component({
  standalone: true,
  selector: 'app-juegos-estrategia',
  imports: [CardJuegoComponent,CommonModule],
  templateUrl: './juegos-estrategia.component.html',
  styleUrl: './juegos-estrategia.component.css'
})
export class JuegosEstrategiaComponent {

juegos = [
  {
    titulo: 'Catan',
    descripcion: 'El clásico juego de construcción y comercio donde debes colonizar la isla de Catan.',
    imagen: 'img/catan.png',
    precioActual: 45100,
    precioOriginal: 55000,
    descuento: 18,
  },
  {
    titulo: 'Risk',
    descripcion: 'Conquista el mundo en este épico juego de estrategia militar y diplomacia.',
    imagen: 'img/risk.png',
    precioActual: 38000,
    precioOriginal: 0,
    descuento:0,
  },
  {
    titulo: 'Ticket to Ride',
    descripcion: 'Construye rutas ferroviarias a través de América del Norte en esta aventura sobre rieles.',
    imagen: 'img/ride.png',
    precioActual: 42000,
    precioOriginal: 50000,
    descuento:16,
  },
  {
    titulo: 'Splendor',
    descripcion: 'Conviértete en un próspero comerciante de gemas en el Renacimiento.',
    imagen: 'img/splendor.png',
    precioActual: 35000,
    precioOriginal: 0,
    descuento:0,
  }
];

}
