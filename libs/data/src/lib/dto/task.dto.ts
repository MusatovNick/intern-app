import { Identifiable } from '../base/identifiable.dto';
import { TaskStatus } from '../enums/task-status.enum';
import { ApiModelProperty } from '@nestjs/swagger';

export class TaskDto extends Identifiable {
  @ApiModelProperty()
  userId: string;
  @ApiModelProperty()
  practiceId: string;
  @ApiModelProperty({
    enum: [TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.IN_REVIEW, TaskStatus.TODO]
  })
  status: TaskStatus;
}