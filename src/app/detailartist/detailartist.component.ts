import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailartist',
  templateUrl: './detailartist.component.html',
  styleUrls: ['./detailartist.component.css']
})
export class DetailartistComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'nb'];
  dataSource: [any];

  constructor(private spotService: SpotifyService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    // Récupère les albums d'un chanteurs

    this.spotService.getUnChanteur(this.route.snapshot.params['id']).subscribe(
      (resultat) => {
        console.log(resultat);
        this.dataSource = resultat['items'];
      }
    );
  }

}
