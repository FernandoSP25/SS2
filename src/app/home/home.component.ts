import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPaused: boolean = true;
    file: string = 'assets/music/reasons-smiles.mp3';

  ngOnInit(): void {}

  playAudio() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused || audio.ended) {
      audio.play();
      this.isPaused = false;
    } else {
      audio.pause();
      this.isPaused = true;
    }
  }

  pauseAudio() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused || audio.ended) {
      audio.play();
      this.isPaused = false;
    } else {
      audio.pause();
      this.isPaused = true;
    }
  }

  enviarCorreo() {
    const destinatario = "fsolanoporto@gmail.com";
    const asunto = "¡Confirmación de cita!";
    const cuerpoMensaje = "¡Hi! Me emociona tanto confirmar nuestra cita. ¡Nos vemos pronto! Besosss Muaaah.";
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;
    window.location.href = mailtoLink;
  }
}
