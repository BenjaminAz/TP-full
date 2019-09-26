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


@NgModule({
  declarations: [
    AppComponent,
    ListBicicletasComponent,
    EditBicicletaComponent,
    NavbarComponent,
    HomeComponent,
    NewBikeComponent,
    ViewBicicletaComponent,
    ConfirmationDialogComponent
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
    ConfirmationDialogService
  ],
  entryComponents: [ ConfirmationDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
