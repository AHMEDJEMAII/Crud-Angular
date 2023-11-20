import { Component,OnInit  } from '@angular/core';
import { etudiantService } from '../../../../service/etudiant.service';

import { Etudiant } from './../../../../Model/Etudiant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantComponent implements OnInit  {
  //initialiser une liste de type etudiant
  etudiant: Etudiant[] = [];
  

  searchText = '';

  constructor( private ServiceEtudiant:etudiantService) { }

  ngOnInit(): void {
    console.log("all data ");
    
    this.getAllEtudiants();

  }

//pour get liste de foyer
  getAllEtudiants(){
    this.ServiceEtudiant.getAllEtudiants().subscribe((data : Etudiant[])=>{
      console.log("all data ",data);
    
      this.etudiant = data;
      console.log(this.etudiant);

    })
  }

  //pour supprimer une foyer

  //pour supprimer une foyer
  deleteEtudiant(id){
    if (confirm("Voulez vous vraiment supprimer ce foyer ?")) {
      this.ServiceEtudiant.deleteEtudiants(id).subscribe(() => {
        alert('Suppression effectuée avec succés');
        window.location.reload();
        });

     
  
  





}

  }
 
}
