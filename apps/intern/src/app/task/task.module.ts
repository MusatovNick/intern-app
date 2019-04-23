import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodePanelComponent } from './components/code-panel/code-panel.component';
import { MonacoEditorModule } from 'ngx-monaco';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CodePanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonacoEditorModule,
  ],
  exports: [
    CodePanelComponent,
  ],
})
export class TaskModule { }
