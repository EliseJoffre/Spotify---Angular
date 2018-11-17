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
  private _playlists: any[];

  ngOnInit() {
    this.spotService.getPlaylist().subscribe(
      (resultat) => {
        this._playlists = resultat['items'];
        console.log(this._playlists);

      }
    );
  }

  addToMyPlaylist(id: string, nb: number) {
    console.log('nb titre' + nb);
    const track = {'uris': [this.data], 'position': nb};
    this.spotService.addTrack(id, track);

  }

}

