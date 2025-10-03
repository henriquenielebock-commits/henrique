import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AuthService,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit,OnDestroy {
  title = 'Sistema de Alunos - Angular 20';
  isAuthenticated = false;
  private authSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    console.log('🔄 AppComponent inicializado');
  }

  ngOnInit() {
    // Estado inicial
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log('🔐 Estado inicial da autenticação:', this.isAuthenticated);

    // Escutar mudanças
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (loggedIn) => {
        this.isAuthenticated = loggedIn;
        console.log('🔄 AppComponent - Autenticação mudou para:', loggedIn);
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  logout(): void {
    console.log('👤 Usuário clicou em sair');
    this.authService.logout();
  }
