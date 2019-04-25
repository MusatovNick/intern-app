import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { BoardsComponent } from './modules/boards/boards/boards.component';
import { AnaliticsComponent } from './modules/analitics/analitics/analitics.component';
import { PracticesComponent } from './modules/practices/practices/practices.component';
import { RouterUrl } from './configs/router-url.enum';
import { InternsComponent } from './components/smart/interns/interns.component';

const routes: Routes = [
  { path: '',
    redirectTo: RouterUrl.LOGIN,
    pathMatch: 'full' },
  { path: RouterUrl.LOGIN,
    component: LoginComponent },
  { path: RouterUrl.HOME,
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: RouterUrl.INTERNS, pathMatch: 'full'},
      { path: RouterUrl.INTERNS, component: InternsComponent},
      { path: RouterUrl.BOARDS, component: BoardsComponent },
      { path: RouterUrl.ANALITICS, component: AnaliticsComponent },
      { path: RouterUrl.PRACTICES, component: PracticesComponent},
  ]},
];

export const routing = RouterModule.forRoot(routes);
