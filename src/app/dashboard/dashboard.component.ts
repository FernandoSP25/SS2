import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { MusicPlayerComponent } from "../music-player/music-player.component";
import { LetterComponent } from "../letter/letter.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-dashboard',
  imports: [ MusicPlayerComponent, LetterComponent, CarouselComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
