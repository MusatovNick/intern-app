import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserDto } from '@intern/data';

@Component({
  selector: 'app-intern-item',
  templateUrl: './intern-item.component.html',
  styleUrls: ['./intern-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternItemComponent {
  @Input() intern: UserDto;
}
