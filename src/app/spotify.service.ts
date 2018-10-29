import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQD-BBSyyWQwOY2tv3Tz7xNLbikdODyh2_gQpZnkw3ZCjqsdbl7t6Xm749EwhFIHIZOl52mDp8mfQ8JXWjaTTdmjoqWS19T473' +
    'N-XKFetKIR7I5J4PLFAqLR3WvGCho61cAx282l_hRPm12LiXpy1yaon4f-oJRoAV2Sqx5LZ7r681uL0sogtgWWitLVBXLU0ZoO7b3fkr4aduQyWAbc6V8GMA' +
    'x1xQZvdp3OeUNI_B8ucrfaP6NudnjzzJGMP9pe1D_uK1cs-QMwpYzy';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/users/elisejoffre/playlists';

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
}



