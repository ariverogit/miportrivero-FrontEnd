import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
//componentes
import { LoginComponent } from '../componentes/login/login.component';

//definimos rutas
const routes: Routes = [
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [],
  //cargamos rutas
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
