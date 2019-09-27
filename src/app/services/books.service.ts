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

  /**
   * Actualiza un alumno específico
   * @param alumno 
   */
  
  updateBook(book: Book) {
    this
      .httpClient
      .put(`${this.url}/books/update/${book._id}`, book)
      .subscribe(res => console.log('Envío a actualización exitoso'));
  }


  addBook(bookName, author, isbn, summary, pages) {

    const newBook: Book = {
      _id: 0,
      bookName: bookName,
      author: author,
      isbn: isbn,
      summary: summary,
      pages: pages
    }
    this.httpClient.post(`${this.url}/books/add`, newBook)
      .subscribe(res => console.log('Envío a grabación exitoso'));
  }

  deleteBook(id) {
    return this
      .httpClient
      .delete(`${this.url}/books/delete/${id}`);
  }


}
