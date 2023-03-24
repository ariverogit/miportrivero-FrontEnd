import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {LoginuserService} from 'src/app/Servicios/loginuser.service';
import {User} from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User();
  logeado: boolean = false;
  constructor(private loginuserservice: LoginuserService){}
  @Output()
  envlog=new EventEmitter<Boolean>();
  ngOnInit(): void{

  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      window.location.href = "/app"
      this.logeado=true;
      
    },error=>alert("Por favor ingrese usuario y password correcto")
    
    );
  }

  envdato(valor:Boolean ){
    this.envlog.emit(this.logeado)

  }

}
