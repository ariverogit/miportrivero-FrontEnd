import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/Servicios/image.service';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-edit-pres',
  templateUrl: './edit-pres.component.html',
  styleUrls: ['./edit-pres.component.css']
})
export class EditPresComponent implements OnInit{
persona: persona=null;

  constructor(
    private activatedRouter : ActivatedRoute,
    private  personaService:PersonaService ,private router: Router, public imageService: ImageService
  ){}

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{
        this.persona=data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id=this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("error al modificar la persona");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil' + id;
    this.imageService.uploadImage($event,name);
  }

}
