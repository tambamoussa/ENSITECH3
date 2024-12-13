import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Cette variable représente l'état de la connexion de l'utilisateur
  private isAuthenticated = false;  // Vous pouvez la lier à un service d'authentification pour une gestion plus robuste

  constructor(private router: Router) {}

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.isAuthenticated = false;  // Réinitialiser l'état de la connexion
    this.router.navigate(['/login']);  // Rediriger vers la page de connexion
  }

  // Vous pouvez ajouter une méthode pour simuler la connexion, si nécessaire
  login(): void {
    this.isAuthenticated = true;  // Simuler la connexion
    this.router.navigate(['/home']);  // Rediriger vers la page d'accueil ou une autre page protégée
  }
}
