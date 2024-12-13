import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  // Méthode pour obtenir le nombre d'enseignants (données simulées)
  getEnseignantCount(): Observable<{ count: number }> {
    const simulatedTeacherCount = 15;  // Données simulées pour les enseignants
    return of({ count: simulatedTeacherCount });
  }
}
