import * as mongoose from 'mongoose';
import { PracticeDto } from '@intern/data';
import { schema } from '../../helper/schema.helper';

export const PracticeSchema = new mongoose.Schema(schema<PracticeDto>({
  name: String,
  description: String,
  sample: String,
  test: String,
}));

export const PRACTICE_SCHEMA_NAME = 'practice';