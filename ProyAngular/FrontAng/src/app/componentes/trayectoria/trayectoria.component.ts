import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { SExperienciaService } from 'src/app/Servicios/s-experiencia.service';
import { TokenService } from 'src/app/Servicios/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})
export class TrayectoriaComponent implements OnInit {
  
  expe:Experiencia[]=[];
  trayectList:any;
  tarealist:any;
  constructor (private datosPortfolio:PortfolioService, private sExperiencia:SExperienciaService, private tokenService:TokenService){}

  isLogged = false;
  
  ngOnInit(): void{

    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this. isLogged = false;
    } 
    
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.trayectList=data.trayectoria;
      
    })
    

  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe( data =>{this.expe = data;})
  }

  delete(id?:number){
    if(id!==undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err=>{
          alert("No se puede borrar la trayectoria");
        }
      )
    }
  }
  

}

