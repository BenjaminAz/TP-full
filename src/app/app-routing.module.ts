import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBicicletasComponent } from './list-bicicletas/list-bicicletas.component';
import { HomeComponent } from './home/home.component';
import { EditBicicletaComponent } from './edit-bicicleta/edit-bicicleta.component';
import { NewBikeComponent } from './add-bicicleta/add-bicicleta.component';
import { ViewBicicletaComponent } from './view-bicicleta/view-bicicleta.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAlumnoComponent } from './new-alumno/new-alumno.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewSongComponent } from './new-song/new-song.component';


const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path:'list-bicicletas', component:ListBicicletasComponent},
  {path:'home', component:HomeComponent},
  {path:'new-bicicleta', component:NewBikeComponent},
  {path:'edit-bicicleta/:id', component:EditBicicletaComponent},
  {path:'view-bicicleta/:id', component:ViewBicicletaComponent},
  {path:'new-book', component:NewBookComponent},
  {path:'new-alumno', component:NewAlumnoComponent},
  {path:'new-product', component:NewProductComponent},
  {path:'new-song', component:NewSongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
