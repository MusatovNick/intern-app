import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDataInterface } from '@intern/data';
import { UserDataService } from '../../auth/services/user-data.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<AuthDataInterface>;
  constructor(private userDataService: UserDataService, private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.userDataService.loadUser$();
    this.userDataService.loadUser$().subscribe(value => console.log(value));
  }

  public logoutUser() {
    this.auth.logout();
  }

}
