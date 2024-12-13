import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    const isAuthenticated = this.authService.login(this.email, this.password);

    if (isAuthenticated) {
      // Si l'utilisateur est authentifié, rediriger vers le tableau de bord
      this.router.navigate(['/dashboard']);
    } else {
      // Afficher un message d'erreur si l'authentification échoue
      this.errorMessage = 'E-mail ou mot de passe incorrect';
    }
  }
}