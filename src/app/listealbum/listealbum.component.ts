import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';


@Component({
  selector: 'app-listealbum',
  templateUrl: './listealbum.component.html',
  styleUrls: ['./listealbum.component.css']
})
export class ListealbumComponent implements OnInit {

  album: any[];

  constructor(private spotService: SpotifyService) {
  }

  ngOnInit() {

  }

  // Recuperation des albums en fonction d'un mot clé rentré

  chercherAlbums(mot: string) {
    this.spotService.getAlbums(mot).subscribe(
      (resultat) => {
        console.log(resultat['albums']);
        this.album = resultat['albums'].items;

      }
    );
  }


}
