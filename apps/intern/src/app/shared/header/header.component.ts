import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthDataInterface } from '@intern/data';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public user$: BehaviorSubject<AuthDataInterface>;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.userData$;
  }

  public logoutUser() {
    this.auth.logout();
  }

}
