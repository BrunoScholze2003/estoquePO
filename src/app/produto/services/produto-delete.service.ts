import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ProdutoGetInterface } from '../interfaces/produto-get-interface';
@Injectable({providedIn: 'root'})
export class ProdutoDeleteService {
  constructor(private http: HttpClient) { }
  delete(id: string): Observable<ProdutoGetInterface[]> {
    return this.http.delete<ProdutoGetInterface[]>(`http://localhost:8080/produto/${id}`)
  }
}
