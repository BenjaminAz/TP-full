import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from './services/books.service';
import { ProductosService } from './services/productos.service';
import { AlumnosService } from './services/alumnos.service';
import { SongsService } from './services/songs.service';
import { NewAlumnoComponent } from './news/new-alumno/new-alumno.component';
import { NewBookComponent } from './news/new-book/new-book.component';
import { NewProductComponent } from './news/new-product/new-product.component';
import { NewSongComponent } from './news/new-song/new-song.component';
import { EditAlumnoComponent } from './edits/edit-alumno/edit-alumno.component';
import { EditBookComponent } from './edits/edit-book/edit-book.component';
import { EditProductComponent } from './edits/edit-product/edit-product.component';
import { EditSongComponent } from './edits/edit-song/edit-song.component';
import { ViewBookComponent } from './views/view-book/view-book.component';
import { ViewSongComponent } from './views/view-song/view-song.component';
import { ViewAlumnoComponent } from './views/view-alumno/view-alumno.component';
import { ViewProductComponent } from './views/view-product/view-product.component';
import { ListBookComponent } from './lists/list-book/list-book.component';
import { ListProductComponent } from './lists/list-product/list-product.component';
import { ListAlumnoComponent } from './lists/list-alumno/list-alumno.component';
import { ListSongsComponent } from './lists/list-songs/list-songs.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { DropdownNewsComponent } from './dropdown-news/dropdown-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    NewAlumnoComponent,
    NewBookComponent,
    NewProductComponent,
    NewSongComponent,
    EditAlumnoComponent,
    EditBookComponent,
    EditProductComponent,
    EditSongComponent,
    ViewBookComponent,
    ViewSongComponent,
    ViewAlumnoComponent,
    ViewProductComponent,
    ListBookComponent,
    ListProductComponent,
    ListAlumnoComponent,
    ListSongsComponent,
    CollapsesComponent,
    DropdownNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    BooksService,
    ProductosService,
    AlumnosService,
    SongsService,
    ConfirmationDialogService
  ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
