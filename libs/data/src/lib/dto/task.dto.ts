import { Identifiable } from '../base/identifiable.dto';
import { TaskStatus } from '../enums/task-status.enum';

export class TaskDto extends Identifiable {
  userId: string;
  practiceId: string;
  status: TaskStatus;
}