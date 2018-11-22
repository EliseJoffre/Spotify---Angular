import {Component, OnInit} from '@angular/core';
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

  constructor(private spotService: SpotifyService) {
  }

  ngOnInit() {

    // Récupération des de toutes playlists

    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        this._playlists = resultat['items'];
      }
    );
  }

  // Ajout d'une playlist

  addPlaylist(nom: string, description: string, bool: string) {

    this.public = bool === 'true' ? true : false;

    const playlist = {
      'name': nom,
      'description': description,
      'public': this.public,

    };

    this.spotService.addPlaylist(playlist);

  }

}
