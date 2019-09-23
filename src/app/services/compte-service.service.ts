import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte';

const SERVER = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class CompteServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllComptes(): Observable<any> {
    return this.http
    .get<Compte>(SERVER + '/comptes');
  }

  public getCompteById(id: number): Observable<any> {
    return this.http
    .get<Compte>(SERVER + '/compte/' + id);
  }

  public createCompte(compte: Compte): Observable<any> {
    return this.http
    .post<Compte>(SERVER + '/compte', JSON.stringify(compte), this.httpOptions);
  }

  public deleteCompte(compte: Compte): Observable<any> {
    return this.http
    .delete<Compte>(SERVER + '/compte/' + compte.idCompte);
  }

  public getOperationsCompte(compte: Compte): Observable<any> {
    return this.http
    .get<Compte>(SERVER + '/ops-compte/' + compte.idCompte);
  }

  public soldeMAJ(compte: Compte): Observable<any> {
    return this.http
    .put<Compte>(SERVER + '/solde/' + compte.idCompte, JSON.stringify(compte), this.httpOptions);
  }

  public previsionMois(compte: Compte): Observable<any> {
    return this.http
    .get<number>(SERVER + '/prevMois/' + compte.idCompte);
  }

  public previsionAnnee(compte: Compte): Observable<any> {
    return this.http
    .get<number>(SERVER + '/prevAnnee/' + compte.idCompte);
  }

}
