import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aluno } from './inseriraluno';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inseriraluno',
  templateUrl: './inseriraluno.component.html',
  styleUrls: ['./inseriraluno.component.scss']
})
export class InseriralunoComponent implements OnInit {
  aluno: Aluno = new Aluno();

  alunoForm: FormGroup = new FormGroup({
    id: new FormControl<number | null>(null),
    matricula: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nascimento: new FormControl('', [Validators.required])
  });

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const alunoSalvo = localStorage.getItem('aluno-salvo');
    if (alunoSalvo) {
      this.aluno = JSON.parse(alunoSalvo);
      this.mapObjectToForm();
    }
  }

  mapObjectToForm(): void {
    this.alunoForm.patchValue({
      id: this.aluno.id,
      matricula: this.aluno.matricula,
      nome: this.aluno.nome,
      nascimento: this.aluno.nascimento ? new Date(this.aluno.nascimento) : null,
      dataHoraCadastro: this.aluno.dataHoraCadastro ? new Date(this.aluno.dataHoraCadastro) : new Date()
    });
  }

  mapFormToObject(): void {
    this.aluno = {
      ...this.aluno,
      ...this.alunoForm.value
    };
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      this.mapFormToObject();

      this.aluno.dataHoraCadastro = new Date();

      console.log('Dados do formulário prontos para envio:', this.aluno);

      const headers = { 'Content-Type': 'application/json' };

      this.alunoService.salvarAluno(this.aluno).subscribe({
        next: (response) => {
          console.log('Aluno salvo com sucesso!', response);
          alert('Aluno cadastrado com sucesso!');
          localStorage.setItem('aluno-salvo', JSON.stringify(response));
          this.alunoForm.reset();

          this.router.navigate([`/editaraluno/${response.id}`]);
        },
        error: (err) => {
          console.error('Erro ao salvar aluno:', err);
          alert(`Erro ao salvar o aluno: ${err.message}`);
        }
      });
    } else {
      Object.keys(this.alunoForm.controls).forEach(key => {
        const control = this.alunoForm.get(key);
        if (control?.invalid) {
          console.log(`Campo ${key} está inválido:`, control.errors);
        }
      });
      alert('Por favor, corrija os erros no formulário antes de salvar.');
    }
  }
}