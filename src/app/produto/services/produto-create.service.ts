import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, throwError } from 'rxjs';
import { ProdutoPostInterface } from '../interfaces/produto-post-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCreateService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public create(produto: ProdutoPostInterface): Observable<ProdutoPostInterface>{
    return this.http.post<ProdutoPostInterface>(`http://localhost:8080/produto`, produto, this.httpOptions);
  }
}
