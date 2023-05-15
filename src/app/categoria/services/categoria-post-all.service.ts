import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, throwError } from 'rxjs';
import { CategoriaPostInterface } from '../interfaces/categoria-post-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaCreateService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }

  public create(categoria: CategoriaPostInterface): Observable<CategoriaPostInterface>{
    return this.http.post<CategoriaPostInterface>(`http://localhost:8080/categoria`, categoria, this.httpOptions);
  }
}
