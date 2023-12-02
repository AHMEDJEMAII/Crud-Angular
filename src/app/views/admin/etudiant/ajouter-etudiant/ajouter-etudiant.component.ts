import { Component, OnInit } from '@angular/core';
import { Etudiant } from './../../../../Model/Etudiant';
import { etudiantService } from './../../../../service/etudiant.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  
  etudiant: Etudiant = { 
    idEtudiant:0,
    nomEt:'',
    prenomEt:'',
    cin:0,
    ecole:'',
    dateNaissance:null


  }



  constructor(private etudiantService: etudiantService ,  private router: Router) { }

  ngOnInit(): void {
  }

  saveEtudiant() {
 
    this.etudiantService.createEmployee(this.etudiant).subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Etudiant ajouter avec succées',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['admin/etudiant']);
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding etudiant:', error);
        }
      );
}
  

  getAllEtudiants() {
    // Implémentez la logique pour récupérer tous les étudiants
    // Utilisez le service etudiantService pour appeler une méthode qui récupère tous les étudiants
  }

  onSubmit() {
    console.log(this.etudiant);
    this.saveEtudiant();
  }
}
