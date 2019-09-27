import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  url : 'http://localhost:5000/api/v1'

  constructor(private httpClient: HttpClient) { }


  getSongs() {
    return this
      .httpClient
      .get(`${this.url}/songs`);
  }

  getSong(id) {
    return this
      .httpClient
      .get(`${this.url}/songs/${id}`);
  }


  updateSong(product: Song) {
    this
      .httpClient
      .put(`${this.url}/songs/update/${product._id}`, product)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addSong(name, autor, duration) {

    const newSong: Song = {
      _id: 0,
      songName: name,
      author:autor ,
      duration: duration
    }
    this.httpClient.post(`${this.url}/songs/add`, newSong)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deleteSong(id) {
    return this
      .httpClient
      .delete(`${this.url}/songs/delete/${id}`);
  }


}
