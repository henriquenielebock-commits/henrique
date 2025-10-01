import { Injectable,signal } from '@angular/core';
import  { Aluno } from '../models/aluno.model';
import { ALUNOS_MOCK  } from '../shared/mock-alunos.data'
// o que é um serviço?
// é como um garçom que gerencia os dados
// entrega para os componentes quando precisam

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
   //signal()- recurso moderno do angular para estado reativo]
   private alunosSignal = signal<Aluno[]>([...ALUNOS_MOCK]);

   obterAlunos(){
    return this.alunosSignal.asReadonly() // Só leitura
   }
}
