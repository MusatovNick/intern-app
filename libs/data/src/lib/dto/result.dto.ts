import { Identifiable } from '../base/identifiable.dto';

export class ResultDto extends Identifiable {
  code: string;
  taskId: string;
  authorId: string;
  createdDate: number;
}
