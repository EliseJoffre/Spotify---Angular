import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailplaylist',
  templateUrl: './detailplaylist.component.html',
  styleUrls: ['./detailplaylist.component.css']
})
export class DetailplaylistComponent implements OnInit {

  maplaylist: Object;
  constructor(private spotService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotService.getUnePlaylist(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.maplaylist = resultat;
      }
    );
  }

}
