import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './components/smart/boards/boards.component';
import { InternsComponent } from './components/smart/interns/interns.component';
import { InternItemComponent } from './components/dumb/intern-item/intern-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardsComponent,
    InternsComponent,
    InternItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BoardsModule { }
