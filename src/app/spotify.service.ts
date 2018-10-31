import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQCvh_5EKw6gv-FRR-mvxU5F0h8eUxU2hPpQMLwv5kZSO4_h4dtJmks6gM2Y_u01pVnN4xgLxjxb4H9Wwnj0_XHZ5aBH7c' +
    '3roHV4tkZJvfWeVJ6Py9fEuvSiCKIyVEHCEeV1QssJhWe0MPsDEUy_dEJyk_H2c5JZ25kvEGlPtunDISBkt4ryY5q7ghR50JZfqgYYkcn2ee1eeBE1j' +
    'pHSaiRjancABOpff0N_NVGJ8sfpycEAn1ciCTpXugxkgiRc2aMshpuz9mFQwF9h';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/users/elisejoffre/playlists';
  private spotifyUrlUnePlaylist = 'https://api.spotify.com/v1/playlists/';

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + this.token });
  }

  getAlbums(mot: string) {
    return this.http.get(this.spotifyUrlSearchAlbum + mot, { headers : this.headers});
  }

  getChanteurs(chanteur: string) {
    return this.http.get(this.spotifyUrlSearchChanteur + chanteur, { headers : this.headers}); }

  getAlbum(id: string) {
    return this.http.get(this.spotifyUrlAlbum + id, { headers : this.headers});
  }

  getPlaylist() {
    return this.http.get(this.spotifyUrlPlaylist, { headers : this.headers});
  }

  addPlaylist(playlist) {
    this.http.post(this.spotifyUrlPlaylist,  playlist, { headers : this.headers}).subscribe(data => {console.log(data); }, );
  }

  getUnePlaylist(id: string) {
    return this.http.get(this.spotifyUrlUnePlaylist + id, { headers : this.headers});
  }
  updatePlaylist(id: string, playlist) {
    return this.http.put(this.spotifyUrlUnePlaylist + id, playlist , { headers : this.headers}).subscribe(data => {console.log('lalal' + data); }, );
  }

}



