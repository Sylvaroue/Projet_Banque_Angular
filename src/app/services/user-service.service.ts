import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Compte } from '../models/compte';

const SERVER = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


public getAllUsers(): Observable<any> {
  return this.http
  .get<Client>(SERVER + '/clients');
}

public getUserById(id: number): Observable<any> {
  return this.http
  .get<Client>(SERVER + '/client/' + id);
}

public createUser(client: Client): Observable<any> {
  return this.http
  .post<Client>(SERVER + '/client', JSON.stringify(client), this.httpOptions);
}

public deleteUser(client: Client): Observable<any> {
  return this.http
  .delete<Client>(SERVER + '/client/' + client.idUser);
}

public getUserByUsername(username: string): Observable<any> {
  return this.http
  .get<Client>(SERVER + '/client/username/' + username);
}

public getComptesUser(client: Client): Observable<any> {
  return this.http
  .get<Compte>(SERVER + '/comptesclient/' + client.idUser);
}

public updateClient(client: Client): Observable<any> {
  return this.http
  .put<Client>(SERVER + '/client/' + client.idUser, JSON.stringify(client), this.httpOptions);
}

}
