import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {
  userProfile: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.userProfile = profile;
      },
      error => {
        console.error('Error al obtener el perfil', error);
      }
    );
  }
}
