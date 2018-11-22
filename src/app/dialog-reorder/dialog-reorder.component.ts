import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SpotifyService} from '../spotify.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dialog-reorder',
  templateUrl: './dialog-reorder.component.html',
  styleUrls: ['./dialog-reorder.component.css']
})

export class DialogReorderComponent implements OnInit {
  private list: number[] = [];

  constructor(private spotService: SpotifyService, @Inject(MAT_DIALOG_DATA) public data2: any, private route: Router) {
  }

  ngOnInit() {

    // Recuperation de toutes les positions auxquelles on peut placer la chanson dans une playlist

    for (let j = 1; j <= this.data2[1]; j++) {
      this.list[j] = j;
    }
  }


  // Mise à jour de la position de la chanson dans une playlist

  majPosition(i) {
    this.spotService.reorderPlaylist(this.data2[2], this.data2[0], i - 1)
      .subscribe(res => res !== null ? window.location.reload() : console.log(res));
  }

}

