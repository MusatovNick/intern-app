import { Schema } from 'mongoose';
import { RunResultDto } from '@intern/data';
import { schema } from '../../helper/schema.helper';

export const RunResultSchema = new Schema(schema<RunResultDto>({
  status: String,
  errorMessage: String,
  description: String,
  resultId: String,
}));

export const RUN_RESULT_SCHEMA_NAME = 'runResult';