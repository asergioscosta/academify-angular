import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { IAluno } from '../model/ialuno';

@Component({
  selector: 'app-visualizaraluno',
  templateUrl: './visualizaraluno.component.html',
  styleUrl: './visualizaraluno.component.scss'
})

export class VisualizaralunoComponent implements OnInit {
  aluno: IAluno | null = null;
  loading = true;
  erro = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID da rota:', id);

    if (id) {
      this.carregarAluno(Number(id));
    } else {
      this.erro = true;
      this.loading = false;
      console.error('ID não encontrado na rota.');
    }
  }

  carregarAluno(id: number): void {
    console.log('Carregando aluno com ID:', id);
    this.alunoService.visualizarAluno(id).subscribe({
      next: (aluno) => {
        console.log('Aluno recebido:', aluno);
        this.aluno = aluno;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar aluno:', err);
        this.erro = true;
        this.loading = false;
      }
    });
  }
}
