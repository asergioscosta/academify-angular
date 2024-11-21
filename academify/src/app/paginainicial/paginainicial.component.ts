import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../inseriraluno/inseriraluno';

@Component({
  selector: 'app-paginainicial',
  templateUrl: './paginainicial.component.html',
  styleUrl: './paginainicial.component.scss'
})
export class PaginainicialComponent implements OnInit {

  totalAlunos: number = 0;
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService) {
  }

  ngOnInit(): void {
    this.alunoService.getTotal().subscribe(
      {
        next: (res) => {
          console.log(res)
          this.totalAlunos = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log("Requisição total alunos completa");
        }
      }
    );



    // não faz sentido ficar aqui. estou fazendo só como um exemplo

    this.alunoService.getAluno(1).subscribe(
      {
        next: (res) => {
          this.aluno = res;
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log("Requisição aluno completa");
        }
      }
    );



  }


}
