import { Component, Input } from '@angular/core';
import { UserDto } from '@intern/data';

@Component({
  selector: 'app-interns-list',
  templateUrl: './interns-list.component.html',
  styleUrls: ['./interns-list.component.less']
})
export class InternsListComponent{
  @Input() internsList: UserDto[];

}
