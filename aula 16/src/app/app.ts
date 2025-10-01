import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aluno } from './models/aluno.model';
import { AlunoService } from './services/aluno.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './../app/app.html',
  styleUrl: './../app/app.scss'
})
export class App {
  alunos: Aluno[] = [];
  //Injetar o servico no construtor
  constructor(private alunoService: AlunoService){}
  //ngOnInit- método  que roda quando o component e carregado.
  ngOnInit(){
    //chamar o serviço para obter os alunos
    this.alunos = this.alunoService.obterAlunos()();
  }
  
}