import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import {LoginuserService} from 'src/app/Servicios/loginuser.service';
import { TokenService } from 'src/app/Servicios/token.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import {User} from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario! : LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[]=[];
  errMsj!:string;


  constructor(private tokenService:TokenService,private authService:AuthService, private router:Router ){}
  
  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario,this.password);
    this.authService
      .login(this.loginUsuario).subscribe(data=>{
        this.isLogged=true;
        this.isLogginFail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        this.router.navigate([''])
      },err=>{
        this.isLogged=false;
        this.isLogginFail=true;
        this.errMsj=err.console.error.mensaje;
        console.log(this.errMsj);
        
      }

    )
  }

 
  

}
