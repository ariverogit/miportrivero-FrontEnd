import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8000/user/login";
  constructor(private HttpClient:HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.HttpClient.post('${this.baseUrl}', user);
  }
}
