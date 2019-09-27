import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  newBook : FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private bookService: BooksService ) { }

  
  createForm() {
    this.newBook = this.fb.group({
      studentName: ['', Validators.required],
      studentLastName: ['', Validators.required]
    });
  }

  addBook(bookName,author, isbn , summary, pages) {

    this.route.params.subscribe(params => {
      this.bookService.addBook( bookName,author, isbn, summary, pages);
      this.router.navigate(['']);
    });
  }
  ngOnInit() {
  }

}
