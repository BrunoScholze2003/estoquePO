import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaPostInterface } from '../interfaces/categoria-post-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaUpdateService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public update(produto: CategoriaPostInterface, id: string): Observable<CategoriaPostInterface>{
    return this.http.put<CategoriaPostInterface>(`http://localhost:8080/categoria/${id}`, produto, this.httpOptions);
  }
}
