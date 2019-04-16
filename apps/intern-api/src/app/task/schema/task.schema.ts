import * as mongoose from 'mongoose';
import { schema } from '../../helper/schema.helper';
import { TaskInterface } from '@intern/data';

export const TaskSchema = new mongoose.Schema(schema<TaskInterface>({
  practiceId: String,
  userId: String,
  status: String,
}));

export const TASK_SCHEMA_NAME = 'task';