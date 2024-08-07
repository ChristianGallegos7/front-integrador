import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login exitoso', response);
          localStorage.setItem('authToken', response.token); // Guarda el token
          this.router.navigate(['/jobs']);
        },
        error => {
          console.error('Error en el login', error);
        }
      );
    }
  }

}
