import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/Servicios/s-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-newtrayectoria',
  templateUrl: './newtrayectoria.component.html',
  styleUrls: ['./newtrayectoria.component.css']
})
export class NewtrayectoriaComponent implements OnInit {
  nombreE: string='';
  descripcionE: string='';

  constructor(private sExperiencia:SExperienciaService, private router: Router){}

  ngOnInit() : void{

  }

  onCreate() : void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data=>{
        alert("Experiencia saved");
        this.router.navigate(['']);
      },err =>{
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }



}
