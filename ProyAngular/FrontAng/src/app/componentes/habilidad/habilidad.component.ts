import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { SkillService } from 'src/app/Servicios/skill.service';
import { TokenService } from 'src/app/Servicios/token.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  Migraf:any;
  skill:Skill[]=[];
  constructor (private datosPortfolio:PortfolioService,private skillS:SkillService,private tokenService:TokenService){}

  isLogged=false;

  ngOnInit() : void {

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.Migraf=data.habilidades;

    })

    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }

  }

  cargarSkills():void{
    this.skillS.lista().subscribe(
      data=>{
        this.skill=data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data=>{
          this.cargarSkills();
        }, err=>{
          alert("No se pudo borrar el skill")
        }
      )
    }
  }

}
