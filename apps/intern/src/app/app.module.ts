import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { BackendModule } from './backend/backend.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers } from './+state/global.reducers';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BackendModule,
    AuthModule,
    SharedModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    )
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
