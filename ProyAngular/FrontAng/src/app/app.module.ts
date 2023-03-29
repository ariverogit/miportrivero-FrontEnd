import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentarComponent } from './componentes/presentar/presentar.component';
import { TrayectoriaComponent } from './componentes/trayectoria/trayectoria.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { Routes } from '@angular/router';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { RedsocComponent } from './componentes/redsoc/redsoc.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';

const appRoutes:Routes = [
  {path:'login',component:LoginComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentarComponent,
    TrayectoriaComponent,
    HabilidadComponent,
    ProyectoComponent,
    LoginComponent,
    LogoAPComponent,
    RedsocComponent,
    BannerComponent,
    EducacionComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
