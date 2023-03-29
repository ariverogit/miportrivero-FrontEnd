import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-presentar',
  templateUrl: './presentar.component.html',
  styleUrls: ['./presentar.component.css']
})
export class PresentarComponent implements OnInit {
  persona: persona= new persona("","","");
  miPresent:any;

  constructor(public personaService:PersonaService,private datosPortfolio:PortfolioService){}
  /*constructor(private datosPortfolio:PortfolioService) {}*/

  ngOnInit() : void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPresent=data;
      
    })
    this.personaService.getPersona().subscribe(data => {this.persona=data});

  }

}
