import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQDcDIcT61cEtpwjg3_y4xyi2P9wC6Hn9h8U5Ph7jqg3-jG3qjJecBV9uWUQF3JDssLChzq-lzqGFqxgivCBE' +
    '7efIEwHgnqqeOOmqbB-H_vZb4jzSDS2LQYFz_2kQuBYX66XA_LDY69R21Gf7hEYpDfC1aLzzDEDnwkyGvWgGzrr5p2ZnV' +
    'wdHnL2civHRYEd3pLZ4JGMkcIGrFYl9Oz0eCAhS3hRA-4JIx3PrvT6MXGa6HifZXBo2iJEdT3lZCecALHaQSynP1hrwv78';

  private spotifyUrlSearchAlbum = 'https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=';
  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q=';
  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/';
  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/users/elisejoffre/playlists';
  private spotifyUrlUnePlaylist = 'https://api.spotify.com/v1/playlists/';
  private spotifyUrlArtist = 'https://api.spotify.com/v1/artists/'

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


  // Fonction qui permet de changer la position d'une chanson dans une playlist

  getUnChanteur(id: string) {
    return this.http.get(this.spotifyUrlArtist + id + '/albums', {headers: this.headers});
  }
}



