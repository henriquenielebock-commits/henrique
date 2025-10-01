import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aluno } from './models/aluno.model';
import { AlunoService } from './services/aluno.service';
import { AlunoList } from './componentes/aluno-list/aluno-list';
import { AlunoForm } from './componentes/aluno-form/aluno-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AlunoList,AlunoForm],
  templateUrl: './../app/app.html',
  styleUrl: './../app/app.scss'
})
export class App implements OnInit{
  aluno = signal<Aluno>(new Aluno());
alunos: Aluno[] = [];
constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunos = this.alunoService.obterAlunos()();
  }

  adicionarAluno(): void {
    console.log('Aluno a ser cadastrado:', this.aluno());
    // Ainda não adiciona - só mostra no console
  }
}
  
