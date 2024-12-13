import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }
   // Méthode pour obtenir le nombre d'étudiants (données simulées)
   getEtudiantCount(): Observable<{ count: number }> {
    const simulatedStudentCount = 120;  // Données simulées pour les étudiants
    return of({ count: simulatedStudentCount });
  }
}
