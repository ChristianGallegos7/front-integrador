import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Empleo } from '@models/Empleo.model';
import { AuthService } from '@services/auth.service';
import { EmpleosService } from '@services/empleos.service';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './job-listings.component.html',
  styleUrl: './job-listings.component.scss'
})
export class JobListingsComponent implements OnInit {
  public empleos: Empleo[] = [];
  public errorMessage!: string;

  constructor(private empleosService: EmpleosService,
    private authService: AuthService
  ) {

  }
  ngOnInit(): void {
    this.empleosService.listaEmpleos().subscribe({
      next: (data) => {
        this.empleos = data;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
