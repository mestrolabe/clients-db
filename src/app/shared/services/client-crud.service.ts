import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IClient } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientCrudService {
  private clientDtUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }


  private initializeClient(): IClient {
    return {
      id: 0,
      firstName: null as any,
      lastName: null as any,
      gender: null as any,
      idNumber: null as any,
      phoneNumber: null as any,
      mailingAddress: {
        country: null as any,
        city: null as any,
        address: null as any
      },
      physicalAddress: {
        country: null as any,
        city: null as any,
        address: null as any
      },
      img: null as any,
      accounts: [{
        id: null as any,
        accNumber: null as any,
        accType: null as any,
        valute: [],
        accStatus: null as any
      }]
    };
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      errorMsg = `An error occurred: ${err.error.message}`;
    }
    else {
      errorMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }


  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.clientDtUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getClient(id: number): Observable<IClient> {
    if (id === 0) {
      return of(this.initializeClient());
    }
    const url = `${this.clientDtUrl}/${id}`;
    return this.http.get<IClient>(url)
      .pipe(
        tap(data => console.log('getClient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createClient(client: IClient): Observable<IClient> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    client.id = null as any;
    return this.http.post<IClient>(this.clientDtUrl, client, { headers })
      .pipe(
        tap(data => console.log('createClient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateClient(client: IClient): Observable<IClient> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clientDtUrl}/${client.id}`;
    return this.http.put<IClient>(url, client, { headers })
      .pipe(
        tap(() => console.log('updateClient: ' + client.id)),
        map(() => client),
        catchError(this.handleError)
      );
  }

  deleteClient(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clientDtUrl}/${id}`;
    return this.http.delete<IClient>(url, { headers })
      .pipe(
        tap(data => console.log('deleteClient: ' + id)),
        catchError(this.handleError)
      );
  }

} 
