import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '@intern/data';
import { InternService } from '../../../../../services/intern/intern.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternsComponent implements OnInit {
  public interns$: Observable<UserDto[]>;
  constructor(private internsService: InternService) { }

  ngOnInit() {
    this.interns$ = this.internsService.getAllInterns$();
  }

}
