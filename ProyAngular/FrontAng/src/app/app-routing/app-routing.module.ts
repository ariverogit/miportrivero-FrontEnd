import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
//componentes
import { LoginComponent } from '../componentes/login/login.component';
import { HomeComponent } from '../componentes/home/home.component';
import { NewtrayectoriaComponent } from '../componentes/trayectoria/newtrayectoria.component';
import { EditTrayectoriaComponent } from '../componentes/trayectoria/edit-trayectoria.component';
import { NeweducacionComponent } from '../componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from '../componentes/educacion/editeducacion.component';
import { NewSkillComponent } from '../componentes/hys/new-skill.component';
import { EditSkillComponent } from '../componentes/hys/edit-skill.component';
import { EditPresComponent } from '../componentes/presentar/edit-pres.component';

//definimos rutas
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewtrayectoriaComponent},
  {path: 'editexp/:id', component:EditTrayectoriaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'newskill', component:NewSkillComponent},
  {path: 'editskill:/id', component:EditSkillComponent},
  {path: 'editpres:/id', component:EditPresComponent}
  /*{path: ' ' ,redirectTo: '/login', component: LoginComponent}*/

];


@NgModule({
  declarations: [],
  //cargamos rutas
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
