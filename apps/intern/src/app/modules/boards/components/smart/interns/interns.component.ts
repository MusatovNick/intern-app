import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { UserDto } from '@intern/data';
import { InternService } from '../../../../../services/intern/intern.service';
import { tap, map, distinctUntilChanged, filter, debounceTime, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternsComponent implements OnInit {
  public interns$: Observable<UserDto[]>;
  public searchFilter = new FormControl('');

  constructor(private internsService: InternService) { }

  ngOnInit() {
    this.interns$ = this.getInternsFiltered$();
  }

  public onInvite(): void {
    // TODO
  }

  private getInternsFiltered$(): Observable<UserDto[]> {
    return combineLatest(
        this.getInterns$(),
        this.getFilter$(),
      )
      .pipe(
        map(([interns, searchFilter]: [UserDto[], string]) =>
            !searchFilter
              ? interns
              : interns.filter((user: UserDto) =>
                user.lastName.includes(searchFilter) || user.firstName.includes(searchFilter)
              ),
        ),
      );
  }

  private getInterns$(): Observable<UserDto[]> {
    return this.internsService.getAllInterns$()
      .pipe(
        map((interns: UserDto[]) =>
          interns.filter((user: UserDto) => !!user && user.lastName && user.firstName)
        ),
      )
  }

  private getFilter$(): Observable<string> {
    return this.searchFilter.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        debounceTime(300),
      );
  }

}
