import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAluno } from '../model/ialuno';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  

  
  getTotal(): Observable<number> {
    return this.http.get<number>(environment.api_base_url + 'api/aluno/total');
  }

  getAluno(id: number): Observable<IAluno> {
    return this.http.get<IAluno>(environment.api_base_url + 'api/aluno/' + id)
  }


}
