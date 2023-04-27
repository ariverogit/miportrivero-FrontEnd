import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/Servicios/skill.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombre: string;
  porcentaje:number;

  constructor(private skills:SkillService, private router:Router){ }

  ngOnInit(): void {
      
  }

  onCreate(): void{
    const skill =new Skill(this.nombre, this.porcentaje);
    this.skills.save(skill).subscribe(
      data=>{
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Fallo agregar skill");
        this.router.navigate(['']);
      }
    )
  }
}
