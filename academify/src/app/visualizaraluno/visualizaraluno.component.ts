import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { IAluno } from '../model/ialuno';

@Component({
  selector: 'app-visualizaraluno',
  templateUrl: './visualizaraluno.component.html',
  styleUrl: './visualizaraluno.component.scss'
})

export class VisualizarAlunoComponent implements OnInit {
  aluno: IAluno | null = null;
  loading = true;
  erro = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.carregarAluno(Number(id));
    } else {
      this.erro = true;
      this.loading = false;
    }
  }

  carregarAluno(id: number): void {
    this.alunoService.buscarAlunoPorId(id).subscribe({
      next: (aluno) => {
        this.aluno = aluno;
        this.loading = false;
      },
      error: () => {
        this.erro = true;
        this.loading = false;
      }
    });
  }
}
