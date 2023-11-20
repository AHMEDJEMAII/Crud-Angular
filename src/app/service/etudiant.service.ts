import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './../Model/Etudiant';


@Injectable({
  providedIn: 'root'
})
export class etudiantService {
  private apiServer: string = 'http://localhost:8088/TpEtudeDeCas/etudiant/';
  private baseURL: string = 'http://localhost:8088/TpEtudeDeCas/etudiant/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this._http.get<Etudiant[]>(this.apiServer + 'getAllEtudiants', this.httpOptions);
  }

  deleteEtudiants(id:number){
    return this._http.delete<Etudiant[]>(this.apiServer +'deleteEtudiant/'+id, this.httpOptions);
    }

  createEmployee(etudiant: Etudiant) {
    return this._http.post<Etudiant>(this.apiServer + 'addEtudiant', etudiant, this.httpOptions);  }
}
