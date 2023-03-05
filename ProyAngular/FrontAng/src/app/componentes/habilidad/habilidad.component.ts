import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  Migraf:any;

  constructor (private datosPortfolio:PortfolioService){}

  ngOnInit() : void {

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.Migraf=data.habilidades;

    })

  }

}
