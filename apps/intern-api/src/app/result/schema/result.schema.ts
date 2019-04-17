import * as mongoose from 'mongoose';
import { ResultDto } from '@intern/data';
import { schema } from '../../helper/schema.helper';

export const ResultSchema = new mongoose.Schema(schema<ResultDto>({
  code: String,
  taskId: String,
  authorId: String,
  createdDate: String,
}));

export const RESULT_SCHEMA_NAME = 'result';