import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQCYCvH7KmPRYdpJuGYnE_IPiqb2ptVredsv1mCp1ySJe6jhlv-5N9Iwhb4B4hfFe76TjXgYzaN6tdxntjmYV9pS' +
    'aqI2xp1KNvCx_vouTnHw0T87EI5p_Nl8l35JEKzbkKWiKXmBcs8nBcs9P-GJbzMTN2Pi261M1ZndmtXfehZE8SrjW5X-EEEjdKQa7Xz7mQ' +
    'Y_XRozHCD0Akc2_042Q8L95SSYVJUffUA_TjCHyKMZz7Zx3VB3uNKEC495TNWheNwYW5ZupwcvV3n6';
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
    this.http.post(this.spotifyUrlPlaylist,  playlist, { headers : this.headers}).subscribe(res => console.log(res));
  }

  getUnePlaylist(id: string) {
    return this.http.get(this.spotifyUrlUnePlaylist + id, { headers : this.headers});
  }
  updatePlaylist(id: string, playlist) {
    return this.http.put(this.spotifyUrlUnePlaylist + id, playlist , { headers : this.headers}).subscribe(res => console.log(res));
  }

  deleteTrack(id: string, tracks) {
    return this.http.post(this.spotifyUrlUnePlaylist + id +  '/' , tracks, { headers : this.headers});
  }

  addTrack(id: string, track) {
    return this.http.post(this.spotifyUrlUnePlaylist + id +  '/tracks' , track, { headers : this.headers})
      .subscribe(res => console.log('hey' + res));
  }

}



