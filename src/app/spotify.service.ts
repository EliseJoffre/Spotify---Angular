import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQB68YkVRkEA4IVPidCeCD0stwK3ZYSHT7VJ1evyf_OoyU9RDhJUQmm5ZJ9vIGLH8XFu_BLR99rmTSAjTw7syf7zVTV' +
    '9y3dXynV9q1Hf3H4nPmabM1Epf5wNxuuc6MKD52OVuLbnrjKlbDAk5wykbE6KOoaJHJbIIzl8TNe6vK1xVO4KmMANSkCce_fCOrq1wMkPNUyb' +
    '-Ax-nYY1frQdGHTUhPwhpne8ubvoCrKGOF_y84Kd7qFNXvv3AQzme8rUmdsFCCOxJokBlj16';
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

  deleteTrack(id: string, uri, position) {
    // @ts-ignore
    return this.http.request( 'delete', this.spotifyUrlUnePlaylist + id + '/tracks' ,
      {'body' : {'tracks': [{uri : uri, positions : [position]}]} },
      { 'headers' : this.headers}).subscribe(res => console.log('hey' + res));
  }

  addTrack(id: string, track) {
    return this.http.post(this.spotifyUrlUnePlaylist + id +  '/tracks' , track, { headers : this.headers})
      .subscribe(res => console.log('hey' + res));
  }

  reorderPlaylist(id: string, range_start: number, insert_before: number) {
    return this.http.put(this.spotifyUrlUnePlaylist + id +  '/tracks' , {'range_start': range_start, 'insert_before': insert_before}, { headers : this.headers})
      .subscribe(res => console.log('hey' + res));
  }

}



