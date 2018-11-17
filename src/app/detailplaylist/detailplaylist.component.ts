import { Component, OnInit } from '@angular/core';
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
  tracks: Array<Object>;
  constructor(private spotService: SpotifyService, private route: ActivatedRoute, public dialog: MatDialog) { }

  openDialogReorder(i, cpt) {
    this.dialog.open(DialogReorderComponent, {
      data: [i, cpt],

    });
  }

  ngOnInit() {
    this.spotService.getUnePlaylist(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.maplaylist = resultat;

      }
    );
  }

  majPlaylist(name: string, description: string, bool: boolean ) {
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
    location.reload();

  }


  deletePlaylist(uri, position) {
    // this.spotService.deleteTrack(this.route.snapshot.params['id'], uri , position);
  }

}
