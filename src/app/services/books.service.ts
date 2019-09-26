import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: 'http://localhost:5000/api/v1'

  constructor( private httpClient: HttpClient) { }
  getBooks() {
    return this
      .httpClient
      .get(`${this.url}/books`);
  }

  getBook(id) {
    return this
      .httpClient
      .get(`${this.url}/books/${id}`);
  }


  updateBook(book: Book {
    this
      .httpClient
      .put(`${this.url}/books/update/${book._id}`, Book)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addBook(marca, tipo, precio) {

    const newBike: book = {
      _id: 0,
      marca: marca,
      tipo: tipo,
      precio: precio,
    }
    this.httpClient.post(`${this.url}/books/add`, newBike)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deletebook(id) {
    return this
      .httpClient
      .delete(`${this.url}/books/delete/${id}`);
  }

}
