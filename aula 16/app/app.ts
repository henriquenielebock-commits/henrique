import { RouterOutlet } from '@angular/router';
import { Aluno } from './models/aluno.model';

Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sistema-aluno');
  // Criar um aluno de teste
  alunoTeste = new Aluno(1, 'maria', 'F', 'https://randomuser.me/api/portraits/women/1.jpg', 'Angular', 8, 7);
  constructor() {
    this.alunoTeste.processarNotas();
    console.log(this.alunoTeste);
  }
}
