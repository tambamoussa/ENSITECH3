import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'isAuthenticated';
  private isAuthenticated: boolean = false;

  constructor() {
    const isAuthenticated = localStorage.getItem(this.AUTH_KEY);
    this.isAuthenticated = isAuthenticated === 'true';
  }

  // Getter pour exposer l'état d'authentification
  public get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  login(email: string, password: string): boolean {
    const validUsers = [
      { email: 'directeur@ensitech.com', password: 'directeur1234' },
      { email: 'responsable@ensitech.com', password: 'responsable1234' },
    ];
    const user = validUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.isAuthenticated = true;
      localStorage.setItem(this.AUTH_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem(this.AUTH_KEY, 'false');
  }
}
