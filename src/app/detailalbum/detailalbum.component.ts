import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  monalbum: Object;


  constructor(private spotService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotService.getAlbum(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.monalbum = resultat;

      }
    );
  }
}
