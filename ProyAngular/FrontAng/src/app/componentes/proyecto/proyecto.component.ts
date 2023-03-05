import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{
  miProylist: any;

  constructor (private datosPortfolio:PortfolioService){}

  ngOnInit(): void{

      this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miProylist=data.proyectos;  

    })

  }

}
