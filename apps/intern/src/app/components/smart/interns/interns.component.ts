import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InternService } from '../../../services/intern/intern.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserDto } from '@intern/data';

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
