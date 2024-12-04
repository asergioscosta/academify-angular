import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { IAluno } from '../model/ialuno';

@Component({
  selector: 'app-editaraluno',
  templateUrl: './editaraluno.component.html',
  styleUrl: './editaraluno.component.scss'
})

export class EditaralunoComponent implements OnInit {
  alunoForm: FormGroup = new FormGroup({
    id: new FormControl<number | null>(null),
    matricula: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nascimento: new FormControl('', [Validators.required]),
    dataHoraCadastro: new FormControl({ value: '', disabled: true })
  });

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    public router: Router
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarAluno(Number(id));
    } else {
      alert('ID do aluno não encontrado.');
      this.router.navigate(['/listaralunos']);
    }
  }

  carregarAluno(id: number): void {
    this.alunoService.getAluno(id).subscribe({
      next: (aluno: IAluno) => {
        console.log('Aluno carregado:', aluno);
        this.alunoForm.patchValue({
          id: aluno.id,
          matricula: aluno.matricula,
          nome: aluno.nome,
          nascimento: aluno.nascimento
            ? new Date(aluno.nascimento).toISOString().split('T')[0]
            : null,
          dataHoraCadastro: aluno.dataHoraCadastro
            ? new Date(aluno.dataHoraCadastro).toLocaleString()
            : null
        });
      },
      error: (err) => {
        console.error('Erro ao carregar aluno:', err);
        alert('Erro ao carregar os dados do aluno.');
        this.router.navigate(['/listaralunos']);
      }
    });
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      const alunoAtualizado = {
        ...this.alunoForm.getRawValue(),
        nascimento: new Date(this.alunoForm.get('nascimento')?.value).toISOString().split('T')[0],
      };

      console.log('Dados enviados para atualização:', alunoAtualizado);

      if (!alunoAtualizado.id) {
        console.error('ID do aluno não encontrado!');
        return;
      }

      this.alunoService.atualizarAluno(alunoAtualizado.id, alunoAtualizado).subscribe({
        next: (response) => {
          console.log('Aluno atualizado com sucesso:', response);
          alert('Aluno atualizado com sucesso!');
          this.router.navigate(['/listaralunos']);
        },
        error: (err) => {
          console.error('Erro ao atualizar aluno:', err);
          alert(`Erro ao salvar as alterações. Detalhes: ${err.status} - ${err.statusText} - ${err.message}`);
        }
      });
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  }
}
