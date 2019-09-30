import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books : Book[];

  constructor(private bookService: BooksService ,    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getBooks()

  }

  // ==Libros==
  getBooks() {
    this.bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

  deleteBook(id) {
    this.confirmationDialogService.confirm('Please confirmar..', '¿Desea eliminar el libro?')
      .then((confirmed) => {
        if (confirmed) {
          this.bookService.deleteBook(id).subscribe(res => {
            this.books.splice(id, 1);
            this.getBooks();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }


}
