import * as mongoose from 'mongoose';
import { schema } from '../../helper/schema.helper';
import { TaskDto } from '@intern/data';

export const TaskSchema = new mongoose.Schema(schema<TaskDto>({
  practiceId: String,
  userId: String,
  status: String,
}));

export const TASK_SCHEMA_NAME = 'task';