import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent {
  public loginForm: FormGroup = this.builder.group({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  public signIn(): void {
    this.authService.singIn$(
      { email: this.loginForm.value.email, password: this.loginForm.value.password },
    ).subscribe(
      () => this.router.navigate(['/home']),
    );
  }

}
