import { IdentifiableInterface } from '../base/identifiable.interface';
import { TaskStatus } from '../enums/task-status.enum';

export interface TaskInterface extends IdentifiableInterface {
  userId: string;
  practiceId: string;
  status: TaskStatus;
}