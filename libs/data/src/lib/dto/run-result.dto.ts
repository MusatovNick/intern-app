import { RunStatus } from '../enums/run-status.enum';

export class RunResultDto {
  status: RunStatus;
  errors: string;
  description?: string;
}