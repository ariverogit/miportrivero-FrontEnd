import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-presentar',
  templateUrl: './presentar.component.html',
  styleUrls: ['./presentar.component.css']
})
export class PresentarComponent implements OnInit {
  miPresent:any;
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit() : void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPresent=data;
      
    })
  }

}
