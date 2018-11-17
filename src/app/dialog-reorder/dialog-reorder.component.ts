import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SpotifyService} from '../spotify.service';


@Component({
  selector: 'app-dialog-reorder',
  templateUrl: './dialog-reorder.component.html',
  styleUrls: ['./dialog-reorder.component.css']
})
export class DialogReorderComponent implements OnInit {

  constructor(private spotService: SpotifyService, @Inject(MAT_DIALOG_DATA) public data2: any) {

  }

  private list: number[] = [];

  ngOnInit() {

    for (let j = 1; j <= this.data2[1]; j++) {
      this.list[j] = j;
    }
  }

  majPosition(i) {
    console.log('eh oh' + i);
  }


}

