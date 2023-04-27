import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { TokenService } from 'src/app/Servicios/token.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-presentar',
  templateUrl: './presentar.component.html',
  styleUrls: ['./presentar.component.css']
})
export class PresentarComponent implements OnInit {
  persona: persona= null;
  miPresent:any;

  constructor(public personaService:PersonaService,private datosPortfolio:PortfolioService, private tokenService:TokenService){}
  /*constructor(private datosPortfolio:PortfolioService) {}*/
  isLogged=false;
  ngOnInit() : void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPresent=data;
      
    })
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
    

  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data=>{
        this.persona=data;
      }
    )
  }

}
