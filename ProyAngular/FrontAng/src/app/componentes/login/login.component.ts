import { Component, OnInit } from '@angular/core';
import {LoginuserService} from 'src/app/Servicios/loginuser.service';
import {User} from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User();
  constructor(private loginuserservice: LoginuserService){}

  ngOnInit(): void{

  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      window.location.href = "/portfolio"
    },error=>alert("Por favor ingrese usuario y password correcto"));
  }

}
