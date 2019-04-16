import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDataInterface } from '@intern/data';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<AuthDataInterface>;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.userData$;
  }

  public logoutUser() {
    this.auth.logout();
  }

}
