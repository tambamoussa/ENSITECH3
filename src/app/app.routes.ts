import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component'; 
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CoursComponent } from './cours/cours.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: '', component: AppComponent, children: [  
    { path: 'dashboard', component: DashboardComponent },
    { path: 'enseignant', component: EnseignantComponent },
    { path: 'etudiant', component: EtudiantComponent },
    { path: 'cours', component: CoursComponent },
    { path: 'admin', component: AdminComponent },
  ]},
  { path: '**', redirectTo: '/login' } 
];