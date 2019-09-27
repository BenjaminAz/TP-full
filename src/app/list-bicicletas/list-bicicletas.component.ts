import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { Bicicleta } from '../model/bicicleta';
import { BicicletasService } from '../services/bicicletas.service';
import { BooksService } from '../services/books.service';
import { Book } from '../model/book';
import { ProductosService } from '../services/productos.service';
import { AlumnosService } from '../services/alumnos.service';
import { Products } from '../model/products';
import { Alumnos } from '../model/alumnos';
import { SongsService } from '../services/songs.service';
import { Song } from '../model/song';

@Component({
  selector: 'app-list-bicicletas',
  templateUrl: './list-bicicletas.component.html',
  styleUrls: ['./list-bicicletas.component.css']
})
export class ListBicicletasComponent implements OnInit {

  bicicletas: Bicicleta[];
  books: Book[];
  productos: Products[];
  alumnos: Alumnos[]
  songs: Song[];

  constructor(
  private songService: SongsService, 
  private alumnosService: AlumnosService, 
  private bookService: BooksService, 
  private productService: ProductosService, 
  private bikeService: BicicletasService, 
  private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getBicicletas();
    this.getBooks();
    this.getProducts();
    this.getAlumnos();
  }


  getBicicletas() {
    this.bikeService
      .getBicicletas()
      .subscribe((data: Bicicleta[]) => {
        this.bicicletas = data;
      });
    console.log(this.bicicletas)
  }

  
  deleteBicicleta(id) {
    this.confirmationDialogService.confirm('Please confirmar..', '¿Desea eliminar la bicicleta?')
      .then((confirmed) => {
        if (confirmed) {
          this.bikeService.deleteBicicleta(id).subscribe(res => {
            this.bicicletas.splice(id, 1);
            this.getBicicletas();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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

  //== productos

  getProducts() {
    this.productService
      .getProducts()
      .subscribe((data: Products[]) => {
        this.productos = data;
      });

  }

  deleteProducts(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.productService.deleteProduct(id).subscribe(res => {
            this.productos.splice(id, 1);
            this.getProducts();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }


  //== Alumnos

  getAlumnos() {
    this.alumnosService
      .getAlumnos()
      .subscribe((data: Alumnos[]) => {
        this.alumnos = data;
      });

  }

  deleteAlumnos(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.alumnosService.deleteAlumno(id).subscribe(res => {
            this.alumnos.splice(id, 1);
            this.getAlumnos();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  //== Songs

  getSongs() {
    this.songService
      .getSongs()
      .subscribe((data: Song[]) => {
        this.songs = data;
      });
  }

  deleteSongs(id) {
    this.confirmationDialogService.confirm('sad', '¿Desea eliminar el producto?')
      .then((confirmed) => {
        if (confirmed) {
          this.songService.deleteSong(id).subscribe(res => {
            this.songs.splice(id, 1);
            this.getSongs();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
