import { Component } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aluno-detail',
  imports: [ CommonModule,FormsModule,RouterModule],
  templateUrl: './aluno-detail.html',
  styleUrl: './aluno-detail.scss'
})
export class AlunoDetail {
  aluno: Aluno | null = null;
  carregando = false;
  erro = '';

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.carregarAluno(id);
  }

  carregarAluno(id: number) {
    this.carregando = true;
    this.alunoService.getAluno(id).subscribe({
      next: (aluno) => {
        this.aluno = aluno;
        this.carregando = false;
      },
      error: (erro) => {
        this.erro = 'Erro ao carregar aluno: ' + erro.message;
        this.carregando = false;
      }
    });
  }


}
