import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor() { }

  // Méthode pour obtenir le nombre de cours (données simulées)
  getCoursCount(): Observable<{ count: number }> {
    const simulatedCourseCount = 30;  // Données simulées pour les cours
    return of({ count: simulatedCourseCount });
  }
}
