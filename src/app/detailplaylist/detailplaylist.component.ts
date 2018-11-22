import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogReorderComponent} from '../dialog-reorder/dialog-reorder.component';

@Component({
  selector: 'app-detailplaylist',
  templateUrl: './detailplaylist.component.html',
  styleUrls: ['./detailplaylist.component.css']
})
export class DetailplaylistComponent implements OnInit {

  maplaylist: Object;
  public: boolean;

  constructor(private spotService: SpotifyService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['position', 'name', 'duree', 'extrait', 'supprimer', 'reorder'];
  dataSource: [any];

  openDialogReorder(i, cpt, id) {
    this.dialog.open(DialogReorderComponent, {
      data: [i, cpt, id],

    });
  }

  ngOnInit() {

    // Recuperation des informations d'une playlist

    this.spotService.getUnePlaylist(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        this.maplaylist = resultat;
        this.dataSource = resultat['tracks']['items'];

        console.log(this.dataSource);

      }
    );
  }

  // Mise à jour des informations d'une playlist

  majPlaylist(name: string, description: string, bool: boolean) {
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
  }

  // Suppression d'une chanson d'une playlist

  deletePlaylist(id, uri, position) {

    this.spotService.deleteTrack(id, uri, position).subscribe(res => res !== null ? window.location.reload() : console.log(res));

  }

}
