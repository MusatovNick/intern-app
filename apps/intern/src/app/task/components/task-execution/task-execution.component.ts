import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { BehaviorSubject, Subject, Observable, timer } from 'rxjs';
import { takeUntil, filter, switchMap, mergeMap, tap } from 'rxjs/operators';
import { ResultDto, RunResultDto } from '@intern/data';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-task-execution',
  templateUrl: './task-execution.component.html',
  styleUrls: ['./task-execution.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskExecutionComponent implements OnInit, OnDestroy {
  @Input() taskId: string;

  public loader$ = new BehaviorSubject<boolean>(false);
  public successAlert$ = new BehaviorSubject<boolean>(false);
  public failAlert$ = new BehaviorSubject<boolean>(false);
  
  private content$ = new BehaviorSubject<string>(null);
  private contentSubmit$ = new BehaviorSubject<string>(null);
  private onDestroy$ = new Subject<boolean>();

  constructor(
    private resultService: ResultService,
    private taskService: TaskService,
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
        switchMap((code: string) => this.postCode$(code)),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

  private initContentSubmitStream(): void {
    this.contentSubmit$
      .pipe(
        filter(code => !!code),
        tap(() => this.loader$.next(true)),
        switchMap((code: string) => this.postCode$(code)),
        mergeMap(({ _id }: ResultDto) => this.resultService.runResult$(_id)),
        tap(() => this.loader$.next(false)),
        tap((runResult: RunResultDto) => this.processResult(runResult)),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

  private postCode$(code: string): Observable<any> {
    return this.taskService
      .getTaskResults$(this.taskId)
      .pipe(
        switchMap((results: ResultDto[]) => 
          !results.length
            ? this.resultService.postResult$({ code, taskId: this.taskId })
            : this.resultService.updateResult$(results[0]._id, { code, taskId: this.taskId })
        ),
      );
  }

  private processResult({ status }: RunResultDto): void {
    this.showAlert(status === 'success' ? this.successAlert$ : this.failAlert$);
  }

  private showAlert(showAlert$: BehaviorSubject<boolean>): void {
    showAlert$.next(true);

    timer(2000)
      .subscribe(() => showAlert$.next(false));
  }

}
