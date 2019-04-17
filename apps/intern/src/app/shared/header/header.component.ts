import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthDataDto } from '@intern/data';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user$: Observable<AuthDataDto>;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.userData$;
  }

  public logoutUser() {
    this.auth.logout();
  }

}
