import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPaused: boolean = true;
  audioCurrentTime: string = '00:00';
  audioDuration: string = '00:00';

  currentSongIndex: number = 0; // Para controlar el índice de la canción actual

  // currentSong: any = {
  //   name: 'Still',
  //   artist: 'A.N.JELL',
  //   image: '../../assets/TAEHYUNG.jpg',
  //   file: 'assets/music/still.mp3'
  // };

  musicList = [
    { name: 'The Reasons of My Smiles', artist: 'BSS', image: 'assets/images/reasons-smiles.jpeg', file: 'assets/music/reasons-smiles.mp3' },
    { name: 'Love You With All My Heart', artist: 'Crush', image: 'assets/images/love-you-heart.jpeg', file: 'assets/music/love-you-heart.mp3' },
    { name: 'Still', artist: 'A.N.JELL', image: 'assets/images/still.jpeg', file: 'assets/music/still.mp3' },
    { name: 'Promise', artist: 'A.N.JELL', image: 'assets/images/promise.jpeg', file: 'assets/music/promise.mp3' },
    { name: 'Christmas Tree', artist: 'V (BTS)', image: 'assets/images/christmas-tree.jpeg', file: 'assets/music/christmas-tree.mp3' },
    { name: "Can't Get Over You", artist: 'Paul Kim', image: 'assets/images/cant-get-over-you.jpeg', file: 'assets/music/cant-get-over-you.mp3' },
    { name: "Tell Me It's Not a Dream", artist: '10CM', image: 'assets/images/not-a-dream.jpeg', file: 'assets/music/not-a-dream.mp3' },
    { name: 'O Tú o Yo', artist: 'José José', image: 'assets/images/o-tu-o-yo.jpeg', file: 'assets/music/o-tu-o-yo.mp3' },
    { name: 'Por Debajo De La Mesa', artist: 'Luis Miguel', image: 'assets/images/por-debajo.jpeg', file: 'assets/music/por-debajo.mp3' },
    { name: 'Chocolate', artist: 'Jesse & Joy', image: 'assets/images/chocolate.jpeg', file: 'assets/music/chocolate.mp3' },
  ];

  // Aquí, currentSong es un objeto que puede modificarse directamente.
currentSong = this.musicList[this.currentSongIndex]; // Inicializamos con la primera canción


  ngOnInit() {
    setTimeout(() => {
      this.updateAudioDuration();
    }, 100);
  }


  togglePlayPause() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused || audio.ended) {
      audio.play();
      this.isPaused = false;
    } else {
      audio.pause();
      this.isPaused = true;
    }

    audio.addEventListener('timeupdate', () => {
      this.audioCurrentTime = this.formatTime(audio.currentTime);
    });
  }

  updateAudioDuration() {
    const audio = this.audioPlayer.nativeElement;
    this.audioDuration = this.formatTime(audio.duration);
  }

  // Cambiar a la canción anterior
  previousSong() {
    this.currentSongIndex = (this.currentSongIndex === 0) ? this.musicList.length - 1 : this.currentSongIndex - 1;
    this.currentSong = this.musicList[this.currentSongIndex];  // Actualizamos la canción anterior
    this.selectSong(this.currentSong);
  }

  // Cambiar a la siguiente canción
  nextSong() {
    this.currentSongIndex = (this.currentSongIndex === this.musicList.length - 1) ? 0 : this.currentSongIndex + 1;
    this.currentSong = this.musicList[this.currentSongIndex];  // Actualizamos la siguiente canción
    this.selectSong(this.currentSong);
  }

  selectSong(song: any) {
    const index = this.musicList.indexOf(song);
    this.currentSongIndex = index;
    this.currentSong = this.musicList[this.currentSongIndex];  // Actualizamos la canción seleccionada
    this.updateAudioDuration();
    const audio = this.audioPlayer.nativeElement;
    audio.load();
    audio.play();
    this.isPaused = false;
  }

  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
