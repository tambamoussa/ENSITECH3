import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

declare var window: any;  // Déclare l'objet window pour utiliser Bootstrap Modal

@Component({
  selector: 'app-enseignant',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent], // Assurez-vous que FormsModule est bien importé
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  selectedEnseignant: any = { matricule: '', nom: '', prenom: '', specialite: '', email: '', telephone: '' };  // Initialisation avec des valeurs vides ou nulles
  // Liste des enseignants
  enseignantList = [
    { id: 1, matricule: 'EN101', nom: 'Jean', prenom: 'Doe', specialite: 'Mathematics', email: 'jean.doe@example.com', telephone: '1234567890' },
    { id: 2, matricule: 'EN102', nom: 'Marie', prenom: 'Smith', specialite: 'Physics', email: 'marie.smith@example.com', telephone: '0987654321' },
  ];

  constructor() { }

  ngOnInit(): void {}

  // Méthode pour créer un nouvel enseignant
  createEnseignant(enseignant: any): void {
    const newEnseignant = { ...enseignant, id: this.enseignantList.length + 1 }; // Assignation d'un nouvel ID
    this.enseignantList.push(newEnseignant);
    this.resetSelectedEnseignant(); // Réinitialisation après création
  }

  // Méthode pour éditer un enseignant existant
  editEnseignant(enseignant: any): void {
    this.selectedEnseignant = { ...enseignant }; // Crée une copie de l'objet enseignant pour modification
  }

  // Méthode pour mettre à jour un enseignant existant
  updateEnseignant(): void {
    if (this.selectedEnseignant) {
      const index = this.enseignantList.findIndex(e => e.id === this.selectedEnseignant.id);
      if (index !== -1) {
        this.enseignantList[index] = { ...this.selectedEnseignant }; // Mise à jour de l'enseignant
      }
      this.resetSelectedEnseignant(); // Réinitialisation après mise à jour
    }
  }

  // Méthode pour supprimer un enseignant
  deleteEnseignant(id: number): void {
    this.enseignantList = this.enseignantList.filter(enseignant => enseignant.id !== id);
  }

  // Réinitialise la sélection d'enseignant pour l'ajout ou l'édition
  resetSelectedEnseignant(): void {
    this.selectedEnseignant = { matricule: '', nom: '', prenom: '', specialite: '', email: '', telephone: '' };
  }

  // Méthode pour ouvrir la modale
  openModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('enseignantModal'));
    modal.show();
  }

  // Méthode pour fermer la modale
  closeModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('enseignantModal'));
    modal.hide();
  }
}
