import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esto según la URL de tu API

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user)
  }

  public logout(): void {
    localStorage.removeItem('authToken');  // Eliminar el token almacenado
    this.router.navigate(['/auth/user/login']);  // Redirigir al usuario al login
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  public getUser() {
    const token = this.getToken();
    return token ? this.jwtHelper.decodeToken(token) : null;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
}
