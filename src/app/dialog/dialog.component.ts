import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit {

  constructor(private spotService: SpotifyService, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  private playlists: any[];

  ngOnInit() {

    // Récupération des titres de toutes les playlist

    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        this.playlists = resultat['items'];
        console.log(this.playlists);

      }
    );
  }

  // Ajout d'une chanson à une playlist

  addToMyPlaylist(id: string, nb: number) {

    const track = {'uris': [this.data], 'position': nb};
    this.spotService.addTrack(id, track).subscribe(res => res !== null ? window.location.reload() : console.log(res));

  }

}

