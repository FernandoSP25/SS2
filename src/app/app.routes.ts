import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MusicPlayerComponent } from "./music-player/music-player.component";
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'music-player',
        component: MusicPlayerComponent
    },
    {
        path: 'valentin',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home' 
    }
];
