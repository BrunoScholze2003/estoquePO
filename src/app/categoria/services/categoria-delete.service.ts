import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CategoriaGetInterface } from '../interfaces/categoria-get-interface';
@Injectable({providedIn: 'root'})
export class CategoriaDeleteService {
  constructor(private http: HttpClient) { }
  delete(id: string): Observable<CategoriaGetInterface[]> {
    return this.http.delete<CategoriaGetInterface[]>(`http://localhost:8080/categoria/${id}`)
  }
}
