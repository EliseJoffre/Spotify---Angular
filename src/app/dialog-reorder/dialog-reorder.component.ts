import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SpotifyService} from '../spotify.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-dialog-reorder',
  templateUrl: './dialog-reorder.component.html',
  styleUrls: ['./dialog-reorder.component.css']
})
export class DialogReorderComponent implements OnInit {

  constructor(private spotService: SpotifyService, @Inject(MAT_DIALOG_DATA) public data2: any, private route: Router) {

  }

  private list: number[] = [];

  ngOnInit() {

    for (let j = 1; j <= this.data2[1]; j++) {
      this.list[j] = j;
    }
  }

  majPosition(i) {

    i = i - 1;
    console.log('new pos :' + i);
    console.log('id:' + this.data2[2]);
    console.log('ex pos :' + this.data2[0]);
    this.spotService.reorderPlaylist(this.data2[2], this.data2[0], i);



  }

}

