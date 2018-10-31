import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQDy44tq-XvtqzXL_kn7THdM7TfFj5jGKanPI1u83VtlVII0JrxeVRS3uw8UhN6oNu-u0FSKcRyVxWMkzZ-054t6Ibs' +
    '50YF_z4xbVZCQePftjBibcwkEojq60lvQd96IaC0MnOgcbsWoVmoIEPRb1sWiU2LtgWQM2LIEu9BkN-t3Aoh4FryrVZDJ-cxArs_0HSmsDUCUrwq' +
    'eAFTo-QMfAywTwDxeGW0ew1TXn1imSjvwZwalMQ6ILkce_hH8fC3DXoTYwFpp0TMISyPk';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/users/elisejoffre/playlists';
  private spotigyUrlUnePlaylist = 'https://api.spotify.com/v1/playlists/'

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
    return this.http.get(this.spotigyUrlUnePlaylist + id, { headers : this.headers});
  }

}



