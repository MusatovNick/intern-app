import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { BoardsComponent } from './modules/boards/boards/boards.component';
import { AnaliticsComponent } from './modules/analitics/analitics/analitics.component';
import { PracticesComponent } from './modules/practices/practices/practices.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'boards', component: BoardsComponent },
      { path: 'analitics', component: AnaliticsComponent },
      { path: 'practices', component: PracticesComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);
