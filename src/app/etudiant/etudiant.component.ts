import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

declare var window: any;  // Déclare l'objet window pour utiliser Bootstrap Modal

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,NavbarComponent], // Assurez-vous que FormsModule est bien importé
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  selectedEtudiant: any = { matricule: '', nom: '', prenom: '', filiere: '', montantInscription: null }; 
  // Liste des étudiants
  etudiantList = [
    { id: 1, matricule: 'ET101', nom: 'Adeline ', prenom: 'Ndiaye', filiere: 'Programmation JAVA', montantInscription: 50000 },
    { id: 2, matricule: 'ET102', nom: 'Faye ', prenom: 'Jane', filiere: 'Cybersecurité', montantInscription: 60000 },
  ];

  constructor() { }

  ngOnInit(): void {}

  // Méthode pour créer un nouvel étudiant
  createEtudiant(etudiant: any): void {
    const newEtudiant = { ...etudiant, id: this.etudiantList.length + 1 }; // Assignation d'un nouvel ID
    this.etudiantList.push(newEtudiant);
    this.resetSelectedEtudiant(); // Réinitialisation après création
  }

  // Méthode pour éditer un étudiant existant
  editEtudiant(etudiant: any): void {
    this.selectedEtudiant = { ...etudiant }; // Crée une copie de l'objet étudiant pour modification
  }

  // Méthode pour mettre à jour un étudiant existant
  updateEtudiant(): void {
    if (this.selectedEtudiant) {
      const index = this.etudiantList.findIndex(e => e.id === this.selectedEtudiant.id);
      if (index !== -1) {
        this.etudiantList[index] = { ...this.selectedEtudiant }; // Mise à jour de l'étudiant
      }
      this.resetSelectedEtudiant(); // Réinitialisation après mise à jour
    }
  }

  // Méthode pour supprimer un étudiant
  deleteEtudiant(id: number): void {
    this.etudiantList = this.etudiantList.filter(etudiant => etudiant.id !== id);
  }

  // Réinitialise la sélection d'étudiant pour l'ajout ou l'édition
  resetSelectedEtudiant(): void {
    this.selectedEtudiant = { matricule: '', nom: '', prenom: '', filiere: '', montantInscription: null };
  }

  // Méthode pour ouvrir la modale
  openModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('etudiantModal'));
    modal.show();
  }

  // Méthode pour fermer la modale
  closeModal(): void {
    const modal = new window.bootstrap.Modal(document.getElementById('etudiantModal'));
    modal.hide();
  }
}
