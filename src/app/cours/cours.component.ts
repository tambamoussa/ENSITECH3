import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

declare var window: any;  // Déclare l'objet window pour utiliser Bootstrap Modal

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],  // Importation des modules nécessaires
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  // Liste des cours
  coursList = [
    { id: 1, code: 'CS101', intitule: 'Introduction à la programmation', enseignant: 'Mme. DIOP', duree: 30 },
    { id: 2, code: 'MA102', intitule: 'FLUTTER', enseignant: 'M. Martin', duree: 40 },
    { id: 3, code: 'PH103', intitule: 'PYTHON', enseignant: 'Mme. SARR', duree: 35 },
  ];

  // Variables pour gérer l'ajout ou la modification d'un cours
  selectedCours: any = null;

  constructor() { }

  ngOnInit(): void {}

  // Méthode pour créer un nouveau cours
  createCours(cours: any): void {
    const newCours = { ...cours, id: this.coursList.length + 1 }; // Assignation d'un nouvel ID
    this.coursList.push(newCours);
    this.resetSelectedCours(); // Réinitialisation après création
  }

  // Méthode pour éditer un cours existant
  editCours(cours: any): void {
    this.selectedCours = { ...cours }; // Crée une copie de l'objet cours pour modification
    this.openModal(); // Ouvre la modale pour modifier le cours
  }

  // Méthode pour mettre à jour un cours existant
  updateCours(): void {
    if (this.selectedCours) {
      const index = this.coursList.findIndex(c => c.id === this.selectedCours.id);
      if (index !== -1) {
        this.coursList[index] = { ...this.selectedCours }; // Mise à jour du cours
      }
      this.resetSelectedCours(); // Réinitialisation après mise à jour
    }
    this.closeModal(); // Ferme la modale après la mise à jour
  }

  // Méthode pour supprimer un cours
  deleteCours(id: number): void {
    this.coursList = this.coursList.filter(cours => cours.id !== id);
  }

  // Réinitialise la sélection de cours pour l'ajout ou l'édition
  resetSelectedCours(): void {
    this.selectedCours = { code: '', intitule: '', enseignant: '', duree: null };  // Initialisation des champs
  }
  

  // Méthode pour ouvrir la modale
  openModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('coursModal'));
    modal.show();
  }

  // Méthode pour fermer la modale
  closeModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('coursModal'));
    modal.hide();
  }
}
