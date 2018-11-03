import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private token = 'BQAxhU282i4Vwqzxr2vBemdkOfsnTCdxxgvAzvWhDk76Y7DxWtiAn9XRHjvSmQ84M_RHWzTTDf9AfzH-HZS_XCfQlTV1' +
    'xoclIOzXNj3QucaRpi0g1XiyhgY7PU9aX_pFzuZpmVUDkMJeemrmAhurHcHrYLU1eG6zunqoEMzgvx2yTpDw-2UqfK_QDPgrCF2uV3-Cv7_iq_BXeL' +
    'Eg60N16SGHLamUx0Of_0gTIld3QUufkD-GFP8ik1Zpy_lA8gYThhXNKqRTDqwMQw7M';
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
    this.http.post(this.spotifyUrlPlaylist,  playlist, { headers : this.headers});
  }

  getUnePlaylist(id: string) {
    return this.http.get(this.spotifyUrlUnePlaylist + id, { headers : this.headers});
  }
  updatePlaylist(id: string, playlist) {
    return this.http.put(this.spotifyUrlUnePlaylist + id, playlist , { headers : this.headers});
  }

  deleteTrack(id: string, tracks) {
    return this.http.post(this.spotifyUrlUnePlaylist + id +  '/' , tracks, { headers : this.headers});
  }

  addTrack(id: string, track) {
    return this.http.post(this.spotifyUrlUnePlaylist + id +  '/tracks' , track, { headers : this.headers});
  }

}



