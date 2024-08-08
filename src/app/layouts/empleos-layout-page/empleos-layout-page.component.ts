import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-empleos-layout-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './empleos-layout-page.component.html',
  styleUrl: './empleos-layout-page.component.scss'
})
export class EmpleosLayoutPageComponent {
  public userName: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user ? user.name : null;
  }

  logOut() {
    this.authService.logout();
  }
}
