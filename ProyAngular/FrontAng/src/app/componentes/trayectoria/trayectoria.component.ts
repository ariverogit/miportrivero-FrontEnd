import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})
export class TrayectoriaComponent implements OnInit {
  trayectList:any;
  tarealist:any;
  constructor (private datosPortfolio:PortfolioService){}

  ngOnInit(): void{

      this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.trayectList=data.trayectoria;
      
    })
    

  }

}
