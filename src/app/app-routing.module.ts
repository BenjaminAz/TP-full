import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewBookComponent } from './news/new-book/new-book.component';
import { NewAlumnoComponent } from './news/new-alumno/new-alumno.component';
import { NewProductComponent } from './news/new-product/new-product.component';
import { NewSongComponent } from './news/new-song/new-song.component';
import { ViewSongComponent } from './views/view-song/view-song.component';
import { ViewBookComponent } from './views/view-book/view-book.component';
import { ViewProductComponent } from './views/view-product/view-product.component';
import { EditAlumnoComponent } from './edits/edit-alumno/edit-alumno.component';
import { EditProductComponent } from './edits/edit-product/edit-product.component';
import { EditBookComponent } from './edits/edit-book/edit-book.component';
import { EditSongComponent } from './edits/edit-song/edit-song.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { ListBookComponent } from './lists/list-book/list-book.component';
import { ListProductComponent } from './lists/list-product/list-product.component';
import { ListAlumnoComponent } from './lists/list-alumno/list-alumno.component';
import { ListSongsComponent } from './lists/list-songs/list-songs.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path:'list-book', component:ListBookComponent},
  {path:'list-product', component:ListProductComponent},
  {path:'list-alumno', component:ListAlumnoComponent},
  {path:'list-songs', component:ListSongsComponent},
  {path:'home', component:HomeComponent},
  {path:'edit-alumno/:id', component:EditAlumnoComponent},
  {path:'edit-product/:id', component:EditProductComponent},
  {path:'edit-book/:id', component:EditBookComponent},
  {path:'edit-song/:id', component:EditSongComponent},
  {path:'new-book', component:NewBookComponent},
  {path:'new-alumno', component:NewAlumnoComponent},
  {path:'new-product', component:NewProductComponent},
  {path:'new-song', component:NewSongComponent},
  {path:'view-song/:id', component:ViewSongComponent},
  {path:'view-book/:id', component:ViewBookComponent},
  {path:'view-product/:id', component:ViewProductComponent },
  {path: 'collapses', component:CollapsesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
