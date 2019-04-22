import { RunStatus } from '../enums/run-status.enum';
import { Identifiable } from '../base/identifiable.dto';

export class RunResultDto extends Identifiable {
  status: RunStatus;
  errorMessage: string;
  resultId: string;
  description?: string;
}