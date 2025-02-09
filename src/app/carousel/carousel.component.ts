import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: string[] = [];

  constructor() {
    const totalImages = 63; // Número total de imágenes
    const extensionMap: Record<number, string> = { 
      18: 'jpeg', // Imagen específica con extensión diferente 
    };

    // Genera las rutas de las imágenes
    for (let i = 1; i <= totalImages; i++) {
      const extension = extensionMap[i] || 'jpg';
      this.images.push(`assets/caruosel/${i}.${extension}`);
    }

    // Mezcla las imágenes aleatoriamente
    this.shuffleImages();
  }

  // Método para mezclar el array
  private shuffleImages(): void {
    for (let i = this.images.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[randomIndex]] = [this.images[randomIndex], this.images[i]];
    }
  }
}
