import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../spotify.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';




@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})

export class DetailalbumComponent implements OnInit {

  monalbum: Object;


  constructor(private spotService: SpotifyService, private route: ActivatedRoute, public dialog: MatDialog) {}

  openDialog(uri) {
    this.dialog.open(DialogComponent, {
      data: uri,
    });
  }

  ngOnInit() {
    this.spotService.getAlbum(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.monalbum = resultat;
      }
    );
  }

}



