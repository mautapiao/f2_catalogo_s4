import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-card-juego',
  imports: [CommonModule ],
  templateUrl: './card-juego.component.html',
  styleUrl: './card-juego.component.css'
})
export class CardJuegoComponent {
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() precioActual!: number;
  @Input() precioOriginal!: number;
  @Input() descuento!: number;
}
