import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQBpn-wHO_t98YCRze_tW2EPFIepHdzzkVMpGfoaFcTruASP8QUOgt2XzXBTsLw2X-bVACZ3fUBoorpoQ1HCq8Lw' +
    'oPydlLr8M3qHQIc9sumspKKDwIhxd0fyfOXB8-6MFcs2czUO8O_cGmHOgDme5l1X8a5MVpKg-NnR-ku8yGdKW4lFmFySa8_-JXWr' +
    'zTRYwJyrqeiCxwSQm0RF41cN5RuZh66oy-wIuH-TExxaF8WkxrildUK6IW9DCAxTwebbrUgAVKOdIec4GTdv';

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/users/elisejoffre/playlists';
  private spotifyUrlUnePlaylist = 'https://api.spotify.com/v1/playlists/';

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});
  }

  // Fonction qui permet de récupérer des albums en fonction d'un mot clé

  getAlbums(mot: string) {
    return this.http.get(this.spotifyUrlSearchAlbum + mot, {headers: this.headers});
  }

  // Fonction qui permet de récupérer des chanteurs en fonction d'un mot clé

  getChanteurs(chanteur: string) {
    return this.http.get(this.spotifyUrlSearchChanteur + chanteur, {headers: this.headers});
  }

  // Fonction qui permet de récupérer un album en fonction de son id

  getAlbum(id: string) {
    return this.http.get(this.spotifyUrlAlbum + id, {headers: this.headers});
  }

  // Fonction qui permet de récupérer les playlist

  getPlaylist() {
    return this.http.get(this.spotifyUrlPlaylist, {headers: this.headers});
  }

  // Fonction qui permet d'ajouter une playlist

  addPlaylist(playlist) {
    this.http.post(this.spotifyUrlPlaylist, playlist, {headers: this.headers})
      .subscribe(res => res !== null ? window.location.reload() : console.log(res));
  }

  // Fonction qui permet de récupérer une playlist en fonction de son id

  getUnePlaylist(id: string) {
    return this.http.get(this.spotifyUrlUnePlaylist + id, {headers: this.headers});
  }

  // Fonction qui permet de mettre à jour les informations d'une playlist

  updatePlaylist(id: string, playlist) {
    return this.http.put(this.spotifyUrlUnePlaylist + id, playlist, {headers: this.headers})
      .subscribe(res => res !== null ? window.location.reload() : window.location.reload());
  }

  // Fonction qui permet d'effacer une chanson d'une playlist

  deleteTrack(id: string, uri, position) {

    return this.http.request(
      'delete',
      this.spotifyUrlUnePlaylist + id + '/tracks', {
        'body':
          {
            'tracks':
              [{
                uri: uri,
                positions: [position]
              }]
          },
        'headers': this.headers
      });
  }

  // Fonction qui permet d'ajouter une chanson d'une playlist

  addTrack(id: string, track) {
    return this.http.post(this.spotifyUrlUnePlaylist + id + '/tracks', track, {headers: this.headers})
      ;
  }

  // Fonction qui permet de changer la position d'une chanson dans une playlist

  reorderPlaylist(id: string, range_start: number, insert_before: number) {
    return this.http.put(this.spotifyUrlUnePlaylist + id + '/tracks',
      {'range_start': range_start, 'insert_before': insert_before}, {headers: this.headers})
      ;
  }

}



