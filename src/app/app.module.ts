import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListBicicletasComponent } from './list-bicicletas/list-bicicletas.component';
import { EditBicicletaComponent } from './edit-bicicleta/edit-bicicleta.component';
import { NewBikeComponent } from './add-bicicleta/add-bicicleta.component';
import { BicicletasService } from './services/bicicletas.service';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ViewBicicletaComponent } from './view-bicicleta/view-bicicleta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from './services/books.service';
import { ProductosService } from './services/productos.service';
import { AlumnosService } from './services/alumnos.service';
import { SongsService } from './services/songs.service';
import { NewAlumnoComponent } from './new-alumno/new-alumno.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewSongComponent } from './new-song/new-song.component';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditSongComponent } from './edit-song/edit-song.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBicicletasComponent,
    EditBicicletaComponent,
    NavbarComponent,
    HomeComponent,
    NewBikeComponent,
    ViewBicicletaComponent,
    ConfirmationDialogComponent,
    NewAlumnoComponent,
    NewBookComponent,
    NewProductComponent,
    NewSongComponent,
    EditAlumnoComponent,
    EditBookComponent,
    EditProductComponent,
    EditSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    BicicletasService,
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
