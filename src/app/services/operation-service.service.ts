import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation';

const SERVER = 'http://localhost:9090';

@Injectable({
  providedIn: 'root'
})
export class OperationServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getAllOperations(): Observable<any> {
    return this.http
      .get<Operation>(SERVER + '/operations');
  }
  public getOperationById(idOperation: number): Observable<any> {
    return this.http
      .get<Operation>(SERVER + '/operation/' + idOperation);
  }
  public createOperation(operation: Operation): Observable<any> {
    return this.http.post<Operation>(SERVER + '/operation_single', JSON.stringify(operation), this.httpOptions);
  }
  public createOperationRepeat(operation: Operation, nbmois: number): Observable<any> {
    return this.http.post<Operation>(SERVER + '/operation_repeat/' + nbmois, JSON.stringify(operation), this.httpOptions);
  }
  public deleteOperation(operation: Operation, idOperation: number): Observable<any> {
    return this.http.delete<Operation>(SERVER + '/operation/' + idOperation);
  }
}
