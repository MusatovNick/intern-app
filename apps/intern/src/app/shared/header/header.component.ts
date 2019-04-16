import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { AuthDataInterface, UserInterface } from '@intern/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<AuthDataInterface>;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user$ = this.auth.getUserData$();
    this.auth.getUserData$().subscribe(value => console.log(value));
  }

  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
    console.log(localStorage);
  }

}
