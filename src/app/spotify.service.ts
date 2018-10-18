import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQDfyDUrPVSevlTW7QHiHaQ7kzeZ7ZkK_UJo1X6OmaEGF3Bqt0NJVokrCUw7bqZ7L' +
    'cdaC1JcpjDvySXQ4vTVtSv82XkkyZKo3Y2D5_iO_jLGQWAlKJNuQq9dcsJE0BuD6rNfG0v2POs3BCo';

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + this.token });

  }

  getAlbums(mot: string) {
    return this.http.get(this.spotifyUrlSearchAlbum + mot, { headers : this.headers});
  }

  getChanteurs(chanteur: string) {
    return this.http.get(this.spotifyUrlSearchChanteur + chanteur, { headers : this.headers}); }

}



