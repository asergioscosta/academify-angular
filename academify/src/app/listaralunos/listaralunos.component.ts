import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlunoService } from '../services/aluno.service';
import { IAluno } from '../model/ialuno';
import { Router } from '@angular/router';

export interface Aluno {
  id: number;
  matricula: string;
  nome: string;
  nascimento: Date;
  dataHoraCadastro: Date;
}

@Component({
  selector: 'app-listaralunos',
  templateUrl: './listaralunos.component.html',
  styleUrl: './listaralunos.component.scss'
})

export class ListaralunosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'matricula', 'nome', 'nascimento', 'dataHoraCadastro', 'acoes'];
  dataSource = new MatTableDataSource<IAluno>();
  loading = false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  carregarAlunos(): void {
    this.loading = true;
    this.alunoService.listarAlunos().subscribe({
      next: (alunos) => {
        this.dataSource.data = alunos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        this.loading = false;
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  visualizarAluno(id: number): void {
    this.router.navigate(['/visualizaraluno', id]);
  }

  editarAluno(id: number): void {
    this.router.navigate(['/editaraluno', id]);
  }

  apagarAluno(id: number): void {
    if (confirm('Tem certeza que deseja apagar este aluno?')) {
      this.loading = true;
      this.alunoService.deletarAluno(id).subscribe({
        next: () => {
          this.carregarAlunos();
        },
        error: (error) => {
          console.error('Erro ao apagar aluno:', error);
          this.loading = false;
        }
      });
    }
  }
}