import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'Bienvenue dans notre application de recherche de musique !';
  constructor() { }

  ngOnInit() {
  }


}
