import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SpotifyService} from './spotify.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ListealbumComponent } from './listealbum/listealbum.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AccueilComponent } from './accueil/accueil.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routing';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import {DetailalbumComponent} from './detailalbum/detailalbum.component';
import { ListeplaylistComponent } from './listeplaylist/listeplaylist.component';
import {MatRadioModule} from '@angular/material/radio';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { DialogReorderComponent } from './dialog-reorder/dialog-reorder.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ListealbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    ListeplaylistComponent,
    DetailplaylistComponent,
    DialogComponent,
    DialogReorderComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule



  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent, DialogReorderComponent ]
})
export class AppModule { }

