import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/jobs']);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

}
