import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MonacoFile, MonacoEditorDirective } from 'ngx-monaco';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodePanelComponent implements OnInit, OnDestroy {
  @Input() set isLoader(value: boolean) {
    this.loader$.next(value);
  };
  @Input() header = 'Header not provided';
  @Input() helperText = 'Type any code here and submit when current task will be ready';
  @Input() submitButtonText = 'Submit';

  @Output() readyStateChanged = new EventEmitter<void>();
  @Output() contentChanged = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<string>();

  public file: MonacoFile = {
      uri: 'index.js',
      language: 'javascript',
      content: `console.log('hello world');`
  };
  
  public fileChange = new Subject<MonacoFile>();
  public loader$ = new BehaviorSubject<boolean>(false);

  private onDestroy$ = new Subject<boolean>();

  @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

  public ngOnInit(): void {
    this.fileChange
      .pipe(
        debounceTime(300),
        distinctUntilChanged((a, b) => a.content === b.content),
        takeUntil(this.onDestroy$),
      )
      .subscribe(
        ({ content }: MonacoFile) => this.contentChanged.next(content),
      );
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  public onFileChange(file: MonacoFile): void {
    this.fileChange.next(file);
  }

  public onReady(_editor: monaco.editor.IEditor): void {
    this.loader$.next(false);
    this.readyStateChanged.next();
  }
  
  public onSubmit(): void {
    this.fileChange
      .pipe(
        take(1),
      )
      .subscribe(
        ({ content }: MonacoFile) => this.submitted.next(content),
      );
  }

}