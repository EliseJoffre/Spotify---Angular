import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {AppComponent} from './app.component';
import {ListealbumComponent} from './listealbum/listealbum.component';
import {ListechanteursComponent} from './listechanteurs/listechanteurs.component';
import {DetailalbumComponent} from './detailalbum/detailalbum.component';
import {ListeplaylistComponent} from './listeplaylist/listeplaylist.component';
export const appRoutes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  {path: 'album', component: ListealbumComponent},
  {path: 'chanteurs', component: ListechanteursComponent},
  { path: 'album/:id', component: DetailalbumComponent },
  { path: 'playlist', component: ListeplaylistComponent },

  ];
