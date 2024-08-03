import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [LoginPageComponent, RegisterPageComponent, RouterModule, NavbarComponent],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

}
