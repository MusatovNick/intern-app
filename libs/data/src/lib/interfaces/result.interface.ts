import { IdentifiableInterface } from '../base/identifiable.interface';

export interface ResultInterface extends IdentifiableInterface {
  code: string;
  taskId: string;
  authorId: string;
  createdDate: string;
}
