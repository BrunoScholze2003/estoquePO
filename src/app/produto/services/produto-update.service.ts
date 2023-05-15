import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoPostInterface } from '../interfaces/produto-post-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoUpdateService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public update(produto: ProdutoPostInterface, id: string): Observable<ProdutoPostInterface>{
    return this.http.put<ProdutoPostInterface>(`http://localhost:8080/produto/${id}`, produto, this.httpOptions);
  }
}
