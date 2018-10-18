import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  constructor(private spotService: SpotifyService) { }

  chanteurs: [any];

  ngOnInit() {

  }

  chercherChanteurs(chanteur: string) {
    this.spotService.getChanteurs(chanteur).subscribe(
      (resultat) => {
        console.log(resultat['artists'].items);
         this.chanteurs = resultat['artists'].items;

      }
    );
  }

}
