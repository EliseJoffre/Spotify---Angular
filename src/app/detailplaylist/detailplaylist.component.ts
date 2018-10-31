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
  public: boolean;
  constructor(private spotService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spotService.getUnePlaylist(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.maplaylist = resultat;

      }
    );
  }

  majPlaylist(name: string, description: string, bool: boolean ) {
    console.log('je passe la');
    if (bool === true) {
      this.public = true;
    } else {
      this.public = false;
    }

    this.spotService.updatePlaylist(this.route.snapshot.params['id'], {
      'name': name,
      'description': description,
      'public': this.public,

    });
    location.reload();

  }

}
