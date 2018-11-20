import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-listeplaylist',
  templateUrl: './listeplaylist.component.html',
  styleUrls: ['./listeplaylist.component.css']
})
export class ListeplaylistComponent implements OnInit {

   private _playlists: any[];
  set playlists(value: any[]) {
    this._playlists = value;
  }
  get playlists(): any[] {
    return this._playlists;
  }
  public: boolean;

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        this._playlists = resultat['items'];
        console.log(this._playlists);
      }
    );
  }

  addPlaylist(nom: string, description: string, bool: string) {

    if (bool === 'true') {
      this.public = true;
    } else {
      this.public = false;
    }

    this.spotService.addPlaylist({
      'name': nom,
      'description': description,
      'public': this.public,

    });

    location.reload();

  }

}
