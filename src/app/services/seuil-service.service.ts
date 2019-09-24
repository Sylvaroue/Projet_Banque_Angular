import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seuil } from '../models/seuil';

const SERVER = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class SeuilServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllSeuils(): Observable<any> {
    return this.http
      .get<Seuil>(SERVER + '/seuils');
  }
  public getSeuilById(idSeuil: number): Observable<any> {
    return this.http
      .get<Seuil>(SERVER + '/seuil/' + idSeuil);
  }
  public createSeuil(seuil: Seuil): Observable<any> {
    return this.http.post<Seuil>(SERVER + '/seuil', JSON.stringify(seuil), this.httpOptions);
  }

  public deleteSeuil(seuil: Seuil, idSeuil: number): Observable<any> {
    return this.http.delete<Seuil>(SERVER + '/seuil/' + idSeuil);
  }

  public updateSeuil(seuil: Seuil, idSeuil: number): Observable<any> {
    return this.http.put<Seuil>(SERVER + '/seuil/' + idSeuil,  JSON.stringify(seuil), this.httpOptions);
  }


}
