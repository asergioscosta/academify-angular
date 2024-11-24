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

  salvarAluno(aluno: IAluno): Observable<IAluno> {
    const headers = { 'Content-Type': 'application/json' };
    const alunoFormatted = {
      ...aluno,
      nascimento: aluno.nascimento instanceof Date ?
        aluno.nascimento.toISOString().split('T')[0] : aluno.nascimento,
      dataHoraCadastro: aluno.dataHoraCadastro instanceof Date ?
        aluno.dataHoraCadastro.toISOString() : aluno.dataHoraCadastro
    };

    return this.http.post<IAluno>(
      `${environment.api_base_url}/api/aluno`,
      alunoFormatted,
      { headers }
    );
  }

  getTotal(): Observable<number> {
    return this.http.get<number>(`${environment.api_base_url}/api/aluno/total`);
  }
  getAluno(id: number): Observable<IAluno> {
    return this.http.get<IAluno>(environment.api_base_url + 'api/aluno/' + id)
  }

  listarAlunos(): Observable<IAluno[]> {
    return this.http.get<IAluno[]>(`${environment.api_base_url}/api/aluno`);
  }  

  atualizarAluno(id: number, aluno: IAluno): Observable<IAluno> {
    const headers = { 'Content-Type': 'application/json' };
    const alunoFormatted = {
      ...aluno,
      nascimento: aluno.nascimento instanceof Date ?
        aluno.nascimento.toISOString().split('T')[0] : aluno.nascimento,
      dataHoraCadastro: aluno.dataHoraCadastro instanceof Date ?
        aluno.dataHoraCadastro.toISOString() : aluno.dataHoraCadastro
    };

    return this.http.put<IAluno>(
      `${environment.api_base_url}/api/aluno/${id}`,
      alunoFormatted,
      { headers }
    );
  }

  deletarAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api_base_url}api/aluno/${id}`);
  }
}