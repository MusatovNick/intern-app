import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginFormComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  exports: [
    LoginFormComponent,
  ],
})
export class AuthModule { }
