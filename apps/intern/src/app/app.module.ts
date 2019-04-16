import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { BackendModule } from './backend/backend.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BackendModule,
    AuthModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
