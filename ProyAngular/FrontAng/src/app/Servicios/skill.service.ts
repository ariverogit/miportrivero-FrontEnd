import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  //skillURL = 'https://localhost:8080/skill/';   //LOCAL
  skillURL = ' https://backaar-1.herokuapp.com/skill/';  //REMOTO

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL+'lista');
  }

  public detail(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillURL+`detail/${id}`);

  }

  public save(skill:Skill):Observable<any>{
    return this.httpClient.post<any>(this.skillURL+'create',skill);
  }

  public update(id:Number,skill:Skill):Observable<any>{
    return this.httpClient.put<any>(this.skillURL+`update/${id}`,skill);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.skillURL+`delete/${id}`);
  }

}
