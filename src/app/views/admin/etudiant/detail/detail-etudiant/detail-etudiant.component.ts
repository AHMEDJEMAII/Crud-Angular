import { Component, Inject, Input } from '@angular/core';
import { Etudiant } from 'src/app/Model/Etudiant';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent {
  @Input() etudiant?: Etudiant;

  


  constructor(private dialogRef: MatDialogRef<DetailEtudiantComponent>, @Inject(MAT_DIALOG_DATA) public data: { etudiant?: Etudiant }) {
    this.etudiant = data.etudiant;
  }

  ngOnInit() {
  
  }

  printSimplePdf() {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 8]
    });
  
    // En-tête du tableau
    const headers = ['Nom', 'Prénom', 'CIN', 'Ecole', 'Date'];
  
    // Données des étudiants
    const data = [[
      this.etudiant.nomEt,
      this.etudiant.prenomEt,
      this.etudiant.cin,
      this.etudiant.ecole,
      this.etudiant.dateNaissance
    ]];
  
    (doc as any).autoTable({
      head: [headers],
      body: data
    });
  
    doc.save('etudiants.pdf');
  }


}
