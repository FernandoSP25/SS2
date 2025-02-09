import { Component, HostListener } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-letter',
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  cardLifted = false;
  showModal = false;

  showCongrats = false;
  showSad = false;


  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter() {
    this.cardLifted = true;
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave() {
    this.cardLifted = false;
  }

  onYesClick() {
    this.showCongrats = true;
    this.showSad = false;
    this.triggerConfetti();
    this.enviarCorreo();

  }

  onNoClick() {
    this.showSad = true;
    this.showCongrats = false;
  }

  enviarCorreo() {
    const destinatario = "fsolanoporto@gmail.com";
    const asunto = "¡Confirmación de cita!";
    const cuerpoMensaje = "tuss palabritas...  :3";
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;
    window.location.href = mailtoLink;
  }

  triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    }, 3000);
  }

}
