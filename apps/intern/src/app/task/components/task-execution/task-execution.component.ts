import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, filter, switchMap, mergeMap } from 'rxjs/operators';
import { ResultDto } from '@intern/data';

@Component({
  selector: 'app-task-execution',
  templateUrl: './task-execution.component.html',
  styleUrls: ['./task-execution.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskExecutionComponent implements OnInit, OnDestroy {
  @Input() taskId: string;

  private content$ = new BehaviorSubject<string>(null);
  private contentSubmit$ = new BehaviorSubject<string>(null);
  private onDestroy$ = new Subject<boolean>();

  constructor(
    private resultService: ResultService,
  ) {}

  public ngOnInit(): void {
    this.initContentStream();
    this.initContentSubmitStream();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  public onContentChanged(content: string): void {
    this.content$.next(content);
  }

  public onSubmit(content: string): void {
    this.contentSubmit$.next(content);
  }

  private initContentStream(): void {
    this.content$
      .pipe(
        filter(code => !!code),
        switchMap((code: string) => this.resultService.postResult$({
          code,
          taskId: this.taskId,
        })),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

  private initContentSubmitStream(): void {
    this.contentSubmit$
      .pipe(
        filter(code => !!code),
        switchMap((code: string) => this.resultService.postResult$({
          code,
          taskId: this.taskId,
        })),
        mergeMap(({ _id }: ResultDto) => this.resultService.runResult$(_id)),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

}
