import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBicicletasComponent } from './list-bicicletas/list-bicicletas.component';
import { HomeComponent } from './home/home.component';
import { EditBicicletaComponent } from './edit-bicicleta/edit-bicicleta.component';
import { NewBikeComponent } from './add-bicicleta/add-bicicleta.component';
import { ViewBicicletaComponent } from './view-bicicleta/view-bicicleta.component';


const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path:'list-bicicletas', component:ListBicicletasComponent},
  {path:'home', component:HomeComponent},
  {path:'new-bicicleta', component:NewBikeComponent},
  {path:'edit-bicicleta/:id', component:EditBicicletaComponent},
  {path:'view-bicicleta/:id', component:ViewBicicletaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
