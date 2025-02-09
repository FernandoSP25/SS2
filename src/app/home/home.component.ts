import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = "SnowFlowerfeatPeakboy.mp3";
    this.audio.load();
  }

  ngOnInit(): void {}

  playAudio() {
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  enviarCorreo() {
    const destinatario = "fsolanoporto@gmail.com";
    const asunto = "¡Confirmación de cita!";
    const cuerpoMensaje = "¡Hi! Me emociona tanto confirmar nuestra cita. ¡Nos vemos pronto! Besosss Muaaah.";
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;
    window.location.href = mailtoLink;
  }
}
