import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  id = this.route.snapshot.params['id'];

  constructor(private spotService: SpotifyService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['position', 'name', 'duree', 'extrait', 'ajout'];
  dataSource: [any];

  openDialog(uri) {
    this.dialog.open(DialogComponent, {
      data: uri,
    });
  }

  ngOnInit() {

    // Recuperation des informations d'un album

    this.spotService.getAlbum(this.id).subscribe(
      (resultat) => {

        this.monalbum = resultat;
        this.dataSource = resultat['tracks']['items'];
      }
    );


  }

}



