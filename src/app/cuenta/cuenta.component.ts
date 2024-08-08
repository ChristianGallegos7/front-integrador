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
  public userName: string | null = null;
  public email: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user ? user.name : null;
    this.email = user ? user.email : null;
  }
}
