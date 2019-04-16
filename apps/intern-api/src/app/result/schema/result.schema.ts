import * as mongoose from 'mongoose';
import { PracticeInterface, ResultInterface } from '@intern/data';
import { schema } from '../../helper/schema.helper';

export const ResultSchema = new mongoose.Schema(schema<ResultInterface>({
  code: String,
  taskId: String,
  authorId: String,
  createdDate: String,
}));

export const RESULT_SCHEMA_NAME = 'result';