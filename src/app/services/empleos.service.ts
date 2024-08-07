import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleo } from '@models/Empleo.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {


  private apiUrl = 'http://localhost:3000/api'; // Cambia esto según la URL de tu API

  constructor(private http: HttpClient) {
  }

  listaEmpleos(): Observable<Empleo[]> {
    return this.http.get<Empleo[]>(`${this.apiUrl}/empleos`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any) {
    console.error('Error al obtener la lista de empleos', error);
    return throwError('Ocurrió un error al obtener la lista de empleos. Inténtalo de nuevo más tarde.');
  }
}
