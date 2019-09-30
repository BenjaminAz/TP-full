import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book : Book ={
    _id:0,
    bookName:'INFORMACION NO DISPONIBLE',
    author:'INFORMACION NO DISPONIBLE',
    isbn:0,
    pages:0,
    summary:'----'
  }

  constructor(private route: ActivatedRoute, private bookService : BooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let _bookId:number = params['id'];
      this.loadAlumnoInfo(_bookId);
    });
  }


  loadAlumnoInfo(bookId:number){
    this.bookService.getBook(bookId).subscribe((data: Book) => {
      this.book = data;
    });
  }

}
