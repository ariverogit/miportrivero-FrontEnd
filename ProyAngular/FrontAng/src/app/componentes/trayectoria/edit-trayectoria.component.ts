import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SExperienciaService } from 'src/app/Servicios/s-experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-edit-trayectoria',
  templateUrl: './edit-trayectoria.component.html',
  styleUrls: ['./edit-trayectoria.component.css']
})
export class EditTrayectoriaComponent implements OnInit{
  expLab: Experiencia = null;

  constructor(private sExperiencia:SExperienciaService, private activateRouter:ActivatedRoute, 
    private router:Router){}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab=data;
      }, err=>{
        alert('Error al modificar trayectoria');
        this.router.navigate(['']);
      }
    )
      
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.update(id,this.expLab).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert('Error al modificar trayectoria');
        this.router.navigate(['']);
      }
    )
  }

}
