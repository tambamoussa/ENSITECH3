import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { EnseignantService } from '../services/enseignant.service';
import { CoursService } from '../services/cours.service';
import { ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// Enregistrer les éléments nécessaires de Chart.js
import { Chart } from 'chart.js';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective, RouterModule, CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentsCount: number = 0;
  teachersCount: number = 0;
  coursesCount: number = 0;


   // Type du graphique
   public chartType: ChartType = 'bar';

   constructor(
     private etudiantService: EtudiantService,
     private enseignantService: EnseignantService,
     private coursService: CoursService,
     private router: Router,
     private authService: AuthService, 

   ) {}

  // Déclaration des données pour le graphique
  public chartData: ChartData<'bar'> = {
    labels: ['Étudiants', 'Enseignants', 'Cours'],
    datasets: [
      {
        data: [this.studentsCount, this.teachersCount, this.coursesCount],
        label: 'Statistiques',
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        borderColor: ['#007bff', '#28a745', '#ffc107'],
        borderWidth: 1
      }
    ]
  };

  // Options pour le graphique
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

 

  ngOnInit(): void {
    this.loadCounts();
  }

  // Charger les données des étudiants, enseignants et cours
  loadCounts(): void {
    this.etudiantService.getEtudiantCount().subscribe((data) => {
      this.studentsCount = data.count;
      this.updateChart(); // Mettre à jour le graphique après avoir récupéré les données
    });

    this.enseignantService.getEnseignantCount().subscribe((data) => {
      this.teachersCount = data.count;
      this.updateChart(); // Mettre à jour le graphique après avoir récupéré les données
    });

    this.coursService.getCoursCount().subscribe((data) => {
      this.coursesCount = data.count;
      this.updateChart(); // Mettre à jour le graphique après avoir récupéré les données
    });
  }

  // Mettre à jour les données du graphique
  updateChart(): void {
    this.chartData.datasets[0].data = [this.studentsCount, this.teachersCount, this.coursesCount];
  }

   /* // Méthode pour vérifier si l'utilisateur est connecté
   isLoggedIn(): boolean {
    return this.authService.isLoggedIn; 
  }

  logout(): void {
    this.authService.logout();
  } */
}
