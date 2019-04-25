import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticesComponent } from './practices/practices.component';
import { TaskModule } from '../../task/task.module';

@NgModule({
  declarations: [PracticesComponent],
  imports: [
    CommonModule,
    TaskModule,
  ]
})
export class PracticesModule { }
