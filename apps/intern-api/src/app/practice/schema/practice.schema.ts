import * as mongoose from 'mongoose';
import { PracticeInterface } from '@intern/data';
import { schema } from '../../helper/schema.helper';

export const PracticeSchema = new mongoose.Schema(schema<PracticeInterface>({
  name: String,
  description: String,
  sample: String,
  test: String,
}));

export const PRACTICE_SCHEMA_NAME = 'practice';