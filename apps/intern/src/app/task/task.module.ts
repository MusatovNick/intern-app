import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco';
import { SharedModule } from '../shared/shared.module';
import { TaskExecutionComponent } from './components/task-execution/task-execution.component';

@NgModule({
  declarations: [
    TaskExecutionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TaskExecutionComponent,
  ],
})
export class TaskModule { }
