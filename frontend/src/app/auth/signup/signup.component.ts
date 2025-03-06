import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  passwordMismatch = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.authService.signup(this.name, this.username, this.email, this.password).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/login']);
      } else {
        alert('Signup failed');
      }
    });
  }
}
