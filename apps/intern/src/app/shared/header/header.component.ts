import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDataDto } from '@intern/data';
import { AuthService } from '../../auth/services/auth.service';
import { AuthDataService } from '../../auth/services/auth-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user$: Observable<AuthDataDto>;
  constructor(private authService: AuthService, private authDataService: AuthDataService) { }

  ngOnInit() {
    this.user$ = this.authDataService.getUserData$();
  }

  public logoutUser() {
    this.authService.logout();
  }

}
