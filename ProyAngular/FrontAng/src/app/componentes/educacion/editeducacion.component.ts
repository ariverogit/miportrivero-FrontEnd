import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
  educacion: Educacion = null;

  constructor(
    private educacionS:EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
      const id =this.activatedRouter.snapshot.params['id'];
      this.educacionS.detail(id).subscribe(
        data=>{
          this.educacion=data;
        }, err=>{
          alert("Error al modificar");
        }
      )
  }

  onUpdate(){
    const id=this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
