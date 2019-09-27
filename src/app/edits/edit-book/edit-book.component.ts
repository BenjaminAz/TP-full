import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  
  editBook: FormGroup;
  bookToEdit: any = { _id: 0, bookName: '',author:'', isbn: '', summary: '', pages:''  };

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BooksService,private fb :FormBuilder) { this.createForm()}

  createForm() {
    this.editBook = this.fb.group({
      bookName: ['', Validators.required],
      author : ['', Validators.required],
      isbn : ['', Validators.required],
      summary: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getBook(params['id']).subscribe(res => {
        this.bookToEdit = res;
        console.log(this.bookToEdit);
      });
    });
  }

  updateBook(bookName, author,isbn, summary, pages) {
    this.route.params.subscribe(params => {
      const _bookToUpdate:Book ={
        _id: this.bookToEdit._id,
        bookName : bookName,
        author : author ,
        isbn : isbn,
        summary : summary ,
        pages : pages , 
      }
      this.bookService.updateBook(_bookToUpdate);
      this.router.navigate(['/']);
    });
  }
}
